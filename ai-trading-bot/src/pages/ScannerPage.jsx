import { motion } from "framer-motion";

function ScannerPage() {

  const signals = [

    {
      stock: "TATASTEEL",
      signal: "BUY",
      confidence: "87%"
    },

    {
      stock: "SBIN",
      signal: "SELL",
      confidence: "74%"
    },

    {
      stock: "IRB",
      signal: "HOLD",
      confidence: "69%"
    },

    {
      stock: "SUZLON",
      signal: "BUY",
      confidence: "91%"
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
          AI Scanner
        </h1>

        <p className="
          text-gray-400
          mt-3
        ">
          AI generated market opportunities
        </p>

      </div>

      {/* Scanner Grid */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      ">

        {signals.map((item) => (

          <motion.div

            whileHover={{
              y: -5
            }}

            key={item.stock}

            className="
              bg-[#111111]

              border
              border-[#2a2a2a]

              rounded-3xl

              p-8

              transition-all
              duration-300

              hover:border-orange-500

              shadow-lg
            "
          >

            <div className="
              flex
              justify-between
              items-center
              mb-8
            ">

              <h2 className="
                text-3xl
                font-bold
                text-white
              ">
                {item.stock}
              </h2>

              <span className={`
                px-4
                py-2

                rounded-full

                font-bold

                ${
                  item.signal === "BUY"

                  ? `
                    bg-green-500/20
                    text-green-400
                  `

                  : item.signal === "SELL"

                  ? `
                    bg-red-500/20
                    text-red-400
                  `

                  : `
                    bg-orange-500/20
                    text-orange-400
                  `
                }
              `}>

                {item.signal}

              </span>

            </div>

            <p className="
              text-gray-400
              text-lg
            ">
              Confidence
            </p>

            <h3 className="
              text-5xl
              font-black
              text-white
              mt-3
            ">
              {item.confidence}
            </h3>

            <button className="
              mt-8

              bg-orange-500

              hover:bg-orange-600

              text-black
              font-bold

              px-6
              py-4

              rounded-2xl

              transition-all
              duration-300
            ">

              View Analysis

            </button>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}

export default ScannerPage;