import { motion } from "framer-motion";

function PortfolioPage() {

  const holdings = [

    {
      stock: "TCS",
      qty: 15,
      buy: 3200,
      current: 3560,
      profit: "+₹5,400"
    },

    {
      stock: "INFY",
      qty: 20,
      buy: 1450,
      current: 1590,
      profit: "+₹2,800"
    },

    {
      stock: "RELIANCE",
      qty: 10,
      buy: 2500,
      current: 2720,
      profit: "+₹2,200"
    }

  ];

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
    >

      {/* Header */}

      <div className="mb-10">

        <h1 className="
          text-5xl
          font-black
          text-orange-400
        ">
          Portfolio
        </h1>

        <p className="
          text-gray-400
          mt-3
        ">
          Track your investments and profits
        </p>

      </div>

      {/* Summary Cards */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        mb-10
      ">

        <Card
          title="Total Investment"
          value="₹3,50,000"
        />

        <Card
          title="Current Value"
          value="₹4,12,500"
        />

        <Card
          title="Overall Profit"
          value="+₹62,500"
          profit
        />

      </div>

      {/* Holdings */}

      <div className="
        bg-[#111111]

        border
        border-[#2a2a2a]

        rounded-3xl

        p-8
      ">

        <h2 className="
          text-3xl
          font-bold
          text-white
          mb-8
        ">
          Holdings
        </h2>

        <div className="space-y-5">

          {holdings.map((item) => (

            <motion.div

              whileHover={{
                scale: 1.01
              }}

              key={item.stock}

              className="
                bg-[#1c1c1c]

                border
                border-[#333]

                rounded-2xl

                p-6

                flex
                justify-between
                items-center

                transition-all
                duration-300

                hover:border-orange-500
              "
            >

              <div>

                <h3 className="
                  text-2xl
                  font-bold
                  text-white
                ">
                  {item.stock}
                </h3>

                <p className="
                  text-gray-400
                  mt-2
                ">
                  Qty: {item.qty}
                </p>

              </div>

              <div className="
                text-right
              ">

                <p className="
                  text-gray-400
                ">
                  Buy: ₹{item.buy}
                </p>

                <p className="
                  text-white
                  mt-1
                ">
                  Current: ₹{item.current}
                </p>

                <p className="
                  text-green-400
                  font-bold
                  mt-2
                ">
                  {item.profit}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.div>
  );
}

function Card({
  title,
  value,
  profit
}) {

  return (

    <div className="
      bg-[#111111]

      border
      border-[#2a2a2a]

      rounded-3xl

      p-8

      shadow-lg
    ">

      <p className="
        text-gray-400
        text-lg
      ">
        {title}
      </p>

      <h2 className={`
        text-4xl
        font-black
        mt-4

        ${
          profit
            ? "text-green-400"
            : "text-white"
        }
      `}>
        {value}
      </h2>

    </div>
  );
}

export default PortfolioPage;