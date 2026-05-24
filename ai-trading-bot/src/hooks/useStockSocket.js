import { useEffect, useState } from "react";

export default function useStockSocket(symbol) {

  const [livePrice, setLivePrice] = useState(null);

  useEffect(() => {

    if (!symbol) return;

    const socket = new WebSocket(
      "ws://localhost:8000/ws"
    );

    socket.onmessage = (event) => {

      const data = JSON.parse(event.data);

      if (data.symbol === symbol) {
        setLivePrice(data.price);
      }
    };

    return () => socket.close();

  }, [symbol]);

  return livePrice;
}