import { useState } from "react";

import { motion } from "framer-motion";

import { FaSearch } from "react-icons/fa";

import ResultCard from "../components/dashboard/ResultCard";

import Watchlist from "../components/dashboard/Watchlist";

import Portfolio from "../components/dashboard/Portfolio";

import LiveChart from "../components/dashboard/LiveChart";

function Dashboard() {

  const [stock, setStock] = useState("");

  const [action, setAction] = useState("BUY");

  const [quantity, setQuantity] = useState("");

  const [buyPrice, setBuyPrice] = useState("");

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const analyzeStock = async (
    selectedStock
  ) => {

    const stockSymbol =

      typeof selectedStock === "string"

        ? selectedStock

        : stock;

    if (!stockSymbol) return;

    setLoading(true);

    let symbol =
      stockSymbol.toUpperCase();

    if (!symbol.includes(".NS")) {
      symbol += ".NS";
    }

    try {

      const response = await fetch(
        "http://127.0.0.1:8000/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            symbol,

            action,

            quantity:
              Number(quantity),

            buy_price:
              Number(buyPrice)

          })
        }
      );

      const result =
        await response.json();

      console.log(result);

      setData(result);

    } catch (err) {

      console.log(err);

    }

    setLoading(false);
  };

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.4
      }}
    >

      {/* Header */}

      <div className="
        flex
        justify-between
        items-center
        mb-10
      ">

        <div>

          <h1 className="
            text-4xl
            md:text-5xl
            xl:text-6xl
            font-black
            text-white
          ">
            AI Trading Assistant
          </h1>

          <p className="
            text-gray-400
            mt-3
            text-lg
          ">
            Real-time AI stock analysis dashboard
          </p>

        </div>

        <div className="
          bg-[#1a1a1a]

          border
          border-[#2c2c2c]

          rounded-3xl

          shadow-lg

          px-8
          py-5

          text-white
        ">
          NSE / BSE Market
        </div>

      </div>

      {/* Analysis Form */}

      <motion.div

        whileHover={{
          scale: 1.01
        }}

        className="
          bg-[#1a1a1a]

          border
          border-[#2c2c2c]

          rounded-3xl

          shadow-[0_0_25px_rgba(255,140,0,0.08)]

          p-8
          mb-10

          transition-all
          duration-300
        "
      >

        {/* Top Row */}

        <div className="
          flex
          gap-5
          mb-5
        ">

          {/* Search */}

          <div className="
            flex
            items-center
            flex-1

            border
            border-[#333]

            rounded-2xl

            px-4

            bg-[#242424]
          ">

            <FaSearch
              className="
                text-gray-400
              "
            />

            <input

              type="text"

              placeholder="
                Search stock
              "

              value={stock}

              onChange={(e) =>
                setStock(
                  e.target.value
                )
              }

              onKeyDown={(e) => {

                if (e.key === "Enter") {

                  analyzeStock();

                }

              }}

              className="
                w-full
                p-5

                outline-none

                bg-transparent

                text-white

                placeholder:text-gray-500
              "
            />

          </div>

          {/* Action */}

          <select

            value={action}

            onChange={(e) =>
              setAction(
                e.target.value
              )
            }

            className="
              bg-[#242424]

              text-white

              border
              border-[#333]

              rounded-2xl

              px-6

              focus:ring-2
              focus:ring-orange-500

              text-lg
            "
          >

            <option>
              BUY
            </option>

            <option>
              SELL
            </option>

            <option>
              HOLD
            </option>

          </select>

        </div>

        {/* Bottom Inputs */}

        <div className="
          grid
          grid-cols-2
          gap-5
          mb-5
        ">

          <input

            type="number"

            placeholder="
              Quantity
            "

            value={quantity}

            onChange={(e) =>
              setQuantity(
                e.target.value
              )
            }

            className="
              bg-[#242424]

              text-white

              border
              border-[#333]

              rounded-2xl

              p-5

              focus:ring-2
              focus:ring-orange-500

              placeholder:text-gray-500
            "
          />

          <input

            type="number"

            placeholder="
              Bought Price
            "

            value={buyPrice}

            onChange={(e) =>
              setBuyPrice(
                e.target.value
              )
            }

            className="
              bg-[#242424]

              text-white

              border
              border-[#333]

              rounded-2xl

              p-5

              focus:ring-2
              focus:ring-orange-500

              placeholder:text-gray-500
            "
          />

        </div>

        {/* Button */}

        <button

          onClick={() =>
            analyzeStock()
          }

          disabled={loading}

          className="
            bg-orange-500

            hover:bg-orange-600

            hover:scale-105

            text-black
            font-bold

            px-10
            py-5

            rounded-2xl

            shadow-[0_0_25px_rgba(255,140,0,0.25)]

            transition-all
            duration-300
          "
        >

          {
            loading

              ? "Analyzing..."

              : "Analyze Stock"
          }

        </button>

      </motion.div>

      {/* Result */}

      {data && !data.error && (

        <div className="mb-10">

          <ResultCard
            data={data}
          />

        </div>

      )}

      {/* Bottom Grid */}

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-8
      ">

        <Watchlist

          onSelect={(stock) => {

            setStock(stock);

            analyzeStock(stock);

            window.scrollTo({

              top: 0,

              behavior: "smooth"

            });

          }}
        />

        <Portfolio />

      </div>

      {/* Chart */}

      <div className="mt-10">

        <LiveChart />

      </div>

    </motion.div>
  );
}

export default Dashboard;