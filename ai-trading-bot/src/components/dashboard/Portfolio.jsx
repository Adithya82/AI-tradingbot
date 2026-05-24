import { motion } from "framer-motion";

function Portfolio() {

  const stats = [

    {
      title: "Investment",
      value: "₹1,20,000"
    },

    {
      title: "Current Value",
      value: "₹1,38,200"
    },

    {
      title: "Profit",
      value: "+ ₹18,200"
    }

  ];

  return (

    <motion.div

      whileHover={{
        scale: 1.01
      }}

      className="
        bg-[#111111]

        border
        border-[#2a2a2a]

        rounded-3xl

        p-8

        shadow-[0_0_25px_rgba(255,140,0,0.08)]

        transition-all
        duration-300
      "
    >

      {/* Title */}

      <h2 className="
        text-3xl
        font-bold

        text-orange-400

        mb-8
      ">
        Portfolio
      </h2>

      {/* Cards */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-5
      ">

        {stats.map((item) => (

          <motion.div

            key={item.title}

            whileHover={{
              y: -5
            }}

            className="
              bg-[#1c1c1c]

              border
              border-[#333]

              rounded-2xl

              p-6

              shadow-lg

              overflow-hidden
              break-words

              transition-all
              duration-300

              hover:border-orange-500
            "
          >

            {/* Label */}

            <p className="
              text-gray-400
              text-lg
              mb-4
            ">
              {item.title}
            </p>

            {/* Value */}

            <h3 className="
              text-2xl
              lg:text-3xl
              font-black

              text-white
            ">
              {item.value}
            </h3>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}

export default Portfolio;