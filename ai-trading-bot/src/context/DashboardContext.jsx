import {
  createContext,
  useState
} from "react";

export const DashboardContext =
  createContext();

export function DashboardProvider({
  children
}) {

  const [stockData, setStockData] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  return (

    <DashboardContext.Provider
      value={{
        stockData,
        setStockData,
        loading,
        setLoading
      }}
    >

      {children}

    </DashboardContext.Provider>
  );
}