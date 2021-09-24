import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  useEffect(() => {
    //console.log("useeffect test ");
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(
        data => {
          //console.log((data));
          setBookings(data);
        },
        [bookings]
      );
  });

  const search = searchVal => {
    bookings.filter(booking => {
      let filter = booking.firstName == searchVal;
      setBookings(filter);
    });
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

// -------------------------