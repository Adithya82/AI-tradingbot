  TradeAI - AI Powered Stock Trading Assistant

TradeAI is a modern AI-powered stock analysis dashboard built using React, FastAPI, and Machine Learning concepts.
It helps users analyze NSE/BSE stocks and provides AI-based BUY, SELL, or HOLD recommendations using technical indicators like RSI and EMA.

  Features

* Real-time stock analysis
* NSE/BSE stock search
* AI-based BUY / SELL / HOLD prediction
* Portfolio dashboard
* Watchlist section
* AI Scanner for trending opportunities
* Responsive modern UI
* Dark fintech theme
* Animated dashboard using Framer Motion
* Technical indicators:

  * RSI
  * EMA20
  * EMA50

 Tech Stack
   Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* React Icons
* Recharts

   Backend

* FastAPI
* Python
* yFinance
* TA Library

  Project Structure

tradeai-dashboard/
│
├── backend/
│   └── main.py
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md

 Installation

 1. Clone Repository

git clone https://github.com/your-username/tradeai.git


 Frontend Setup
2. Install Dependencies

npm install

3. Start Frontend

npm run dev

Frontend runs on:

http://localhost:5173

 Backend Setup

  4. Create Virtual Environment

python -m venv .venv

  5. Activate Environment


.venv\Scripts\activate

  6. Install Python Packages

pip install fastapi uvicorn yfinance ta pandas

  7. Run Backend

uvicorn main:app --reload

Backend runs on:

http://127.0.0.1:8000

API Endpoint

 Analyze Stock

->http
POST /analyze


 Request Example

->json
{
  "symbol": "TCS.NS",
  "action": "BUY",
  "quantity": 10,
  "buy_price": 3200
}


 Response Example

->json
{
  "symbol": "TCS.NS",
  "recommendation": "BUY",
  "current_price": 3560,
  "pnl": 3600,
  "target": 3700,
  "stop_loss": 3400,
  "confidence": 82,
  "trend": "BULLISH",
  "message": "Strong upward momentum detected."
}

  AI Strategy Used

-> TradeAI currently uses:

* EMA20 vs EMA50 crossover
* RSI momentum analysis
* Trend strength analysis

-> BUY Signal

* EMA20 > EMA50
* RSI > 55

-> SELL Signal

* EMA20 < EMA50
* RSI < 45

  Future Improvements

* Live market websocket integration
* AI candlestick pattern detection
* News sentiment analysis
* Deep learning price prediction
* TradingView chart integration
* User authentication
* Portfolio persistence
* Real broker API integration

  Disclaimer

This project is for educational purposes only.
It is not financial advice or guaranteed trading guidance.

  Author

Adithya

