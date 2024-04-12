import React from "react";
import { Outlet } from "react-router-dom";
import Navitems from "./Components/Navitems";
import Footer from "./Components/Footer";
const App = () => {
  
  return (
    <>
      <Navitems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
