import { useState } from "react"
import Navbar from "../Component/ReactRouterDom/Navbar.jsx";
import Footer from "../Component/ReactRouterDom/Footer.jsx";
import { Outlet } from "react-router-dom";
function App() {

  return (
    <div className="h-screen w-full  flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )

}

export default App;
