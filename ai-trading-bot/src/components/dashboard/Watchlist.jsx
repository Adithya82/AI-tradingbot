import { WATCHLIST } from "../../utils/constants";

import { motion } from "framer-motion";

function Watchlist({ onSelect }) {

  return (

    <div className="
      bg-[#1a1a1a]

      border
      border-[#2c2c2c]

      rounded-3xl
      max-h-[600px]
      overflow-y-auto
      shadow-[0_0_25px_rgba(255,140,0,0.08)]

      p-6
    ">

      {/* Title */}

      <h2 className="
        text-3xl
        font-bold

        text-white

        mb-6
      ">
        Watchlist
      </h2>

      {/* Stocks */}

      <div className="space-y-4">
        
        {WATCHLIST.map((stock) => (

          <motion.div
          
            whileHover={{
              scale: 1.02
            }}

            whileTap={{
              scale: 0.98
            }}

            key={stock}

            onClick={() => {

              onSelect(stock);

            }}

            className="
              flex
              justify-between
              items-center

              bg-[#242424]

              hover:bg-orange-500/20

              border
              border-[#333]

              p-5

              rounded-2xl

              cursor-pointer

              transition-all
              duration-300

              hover:shadow-lg
              hover:shadow-orange-500/10
            "
          >

            {/* Stock Name */}

            <span className="
              text-white
              font-semibold
              text-lg
            ">
              {stock}
            </span>

            {/* Live Badge */}

            <span className="
              text-green-400
              font-bold
            ">
              LIVE
            </span>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default Watchlist;