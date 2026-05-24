import { motion } from "framer-motion";

function ResultCard({ data }) {

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

      whileHover={{
        scale: 1.01
      }}

      transition={{
        duration: 0.4
      }}

      className="
        bg-[#1a1a1a]
        backdrop-blur-xl

        border
        border-[#2c2c2c]
        shadow-[0_0_30px_rgba(255,140,0,0.08)]
        rounded-3xl
        shadow-xl

        p-10

        hover:shadow-2xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >

      <div className="
        flex
        justify-between
        items-center
        mb-10
      ">

        <div>

          <h2 className="
            text-4xl
            font-bold
          ">
            {data.symbol}
          </h2>

          <p className="
            text-gray-400
            mt-2
          ">
            AI Market Analysis
          </p>

        </div>

        <div className={`
          text-4xl
          font-black

          ${
            data.recommendation === "BUY"
              ? "text-green-400"

              : data.recommendation === "SELL"
              ? "text-red-400"

              : "text-orange-400"
          }
        `}>

          {data.recommendation}

        </div>

      </div>

      {/* Metrics */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      ">

        <MetricCard
          title="Current Price"
          value={`₹${data.current_price}`}
        />

        <MetricCard
          title="Profit / Loss"
          value={`₹${data.pnl}`}
        />

        <MetricCard
          title="Confidence"
          value={`${data.confidence}%`}
        />

        <MetricCard
          title="Target"
          value={`₹${data.target}`}
        />

        <MetricCard
          title="Stop Loss"
          value={`₹${data.stop_loss}`}
        />

        <MetricCard
          title="Trend"
          value={data.trend}
        />

      </div>

      {/* AI Insight */}

      <div className="
        mt-10

        bg-[#1a1a1a]

        border
        border-[#2c2c2c]

        rounded-2xl
        p-6
      ">

        <h2 className="
          text-2xl
          font-bold
          mb-3
        ">
          AI Insight
        </h2>

        <p className="text-gray-700">
          {data.message}
        </p>

      </div>

    </motion.div>
  );
}

function MetricCard({
  title,
  value
}) {

  return (

    <motion.div

      whileHover={{
        scale: 1.03
      }}

      className="
        bg-[#242424]
        border
        border-[#333]

        rounded-2xl
        p-6

        shadow-md

        hover:shadow-xl
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >

      <p className="text-gray-400">
        {title}
      </p>

      <h2 className="
        text-3xl
        font-bold
        mt-3
      ">
        {value}
      </h2>

    </motion.div>
  );
}

export default ResultCard;