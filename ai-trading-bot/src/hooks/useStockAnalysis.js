import { useState } from "react";

export default function useStockAnalysis() {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(null);

  const analyzeStock = async (payload) => {

    setLoading(true);

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      const result = await response.json();

      setData(result);

    } catch (err) {

      console.log(err);

    }

    setLoading(false);
  };

  return {
    analyzeStock,
    loading,
    data
  };
}