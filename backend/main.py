from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import yfinance as yf
import ta

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StockRequest(BaseModel):
    symbol: str
    action: str
    quantity: int
    buy_price: float


@app.get("/")
def home():
    return {"message": "AI Trading Bot Backend Running"}


@app.post("/analyze")
def analyze_stock(data: StockRequest):

    try:

        df = yf.download(data.symbol, period="3mo", interval="1d")

        if df.empty:
            return {"error": "Stock not found"}

        close_prices = df["Close"].squeeze()

        df["ema20"] = ta.trend.ema_indicator(
            close_prices,
            window=20
        )

        df["ema50"] = ta.trend.ema_indicator(
            close_prices,
            window=50
        )

        df["rsi"] = ta.momentum.rsi(
            close_prices,
            window=14
        )

        latest = df.iloc[-1]

        current_price = float(latest["Close"])

        ema20 = float(latest["ema20"])
        ema50 = float(latest["ema50"])
        rsi = float(latest["rsi"])

        trend = "SIDEWAYS"
        confidence = 50

        if ema20 > ema50 and rsi > 55:
            trend = "BULLISH"
            confidence = 78

        elif ema20 < ema50 and rsi < 45:
            trend = "BEARISH"
            confidence = 74

        if data.action == "BUY":

            if trend == "BULLISH":
                recommendation = "BUY"
                message = "Strong bullish momentum detected."

            else:
                recommendation = "WAIT"
                message = "Trend is weak for buying now."

        elif data.action == "SELL":

            if trend == "BEARISH":
                recommendation = "SELL"
                message = "Market weakness detected."

            else:
                recommendation = "HOLD"
                message = "Trend still looks bullish."

        else:

            recommendation = "HOLD"
            message = "Market currently neutral."

        pnl = round(
            (current_price - data.buy_price)
            * data.quantity,
            2
        )

        target = round(current_price * 1.05, 2)

        stop_loss = round(current_price * 0.97, 2)

        return {
            "symbol": data.symbol,
            "recommendation": recommendation,
            "trend": trend,
            "current_price": round(current_price, 2),
            "pnl": pnl,
            "target": target,
            "stop_loss": stop_loss,
            "confidence": confidence,
            "ema20": round(ema20, 2),
            "ema50": round(ema50, 2),
            "rsi": round(rsi, 2),
            "message": message
        }

    except Exception as e:

        return {"error": str(e)}