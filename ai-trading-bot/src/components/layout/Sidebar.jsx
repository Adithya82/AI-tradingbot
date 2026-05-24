import {
  FaChartLine,
  FaWallet,
  FaRobot
} from "react-icons/fa";

import {
  NavLink
} from "react-router-dom";

function Sidebar() {

  return (

    <div className="
      w-72
      bg-black

      border-r
      border-[#1f1f1f]

      text-white

      min-h-screen

      p-8

      fixed
      left-0
      top-0
    ">

      {/* Logo */}

      <h1 className="
        text-6xl
        font-black

        text-orange-500

        mb-20
      ">
        TradeAI
      </h1>

      {/* Menu */}

      <div className="space-y-6">

        <MenuItem
          to="/"
          icon={<FaChartLine />}
          text="Dashboard"
        />

        <MenuItem
          to="/portfolio"
          icon={<FaWallet />}
          text="Portfolio"
        />

        <MenuItem
          to="/scanner"
          icon={<FaRobot />}
          text="AI Scanner"
        />

      </div>

    </div>
  );
}

function MenuItem({
  icon,
  text,
  to
}) {

  return (

    <NavLink

      to={to}

      className={({ isActive }) => `

        flex
        items-center
        gap-4

        p-5

        rounded-2xl

        transition-all
        duration-300

        ${
          isActive

          ? `
            bg-orange-500
            text-black

            shadow-[0_0_25px_rgba(255,140,0,0.3)]
          `

          : `
            hover:bg-[#1a1a1a]
            hover:text-orange-400
          `
        }
      `}
    >

      {icon}

      <span className="
        text-xl
        font-semibold
      ">
        {text}
      </span>

    </NavLink>
  );
}

export default Sidebar;