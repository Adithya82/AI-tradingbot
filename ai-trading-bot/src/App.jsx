import Sidebar from "./components/layout/Sidebar";

import {
  Routes,
  Route
} from "react-router-dom";

import {
  motion
} from "framer-motion";

import Dashboard from "./pages/Dashboard";
import PortfolioPage from "./pages/PortfolioPage";
import ScannerPage from "./pages/ScannerPage";

function App() {

  return (

    <div className="
      flex
      bg-black
      min-h-screen
      text-white
    ">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <motion.div

        initial={{
          opacity: 0,
          x: 20
        }}

        animate={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: 0.5
        }}

        className="
          ml-0
          lg:ml-72
          flex-1
          p-10
          min-h-screen

          bg-gradient-to-br
          from-[#111111]
          via-[#181818]
          to-[#0f0f0f]

          text-white
        "
      >

        {/* Glow Background */}

        <div className="
          fixed
          top-0
          right-0

          w-[500px]
          h-[500px]

          bg-orange-500/10

          blur-3xl

          rounded-full

          pointer-events-none
        "></div>

        {/* Page Content */}

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/portfolio"
            element={<PortfolioPage />}
          />

          <Route
            path="/scanner"
            element={<ScannerPage />}
          />

        </Routes>

      </motion.div>

    </div>
  );
}

export default App;