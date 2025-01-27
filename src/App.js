import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/footer.js";
//import Restaurant from "./components/Restaurant";

import Bookings from "./components/Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      {/* <Restaurant /> */}
      <Footer />
    </div>
  );
};

export default App;
