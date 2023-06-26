import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Home() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    fetch("https://6499006379fbe9bcf83e8fe9.mockapi.io/api/v1/data")
      .then((response) => response.json())
      .then((data) => setStaffs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="w-screen min-h-screen flex items-center justify-start flex-col mt-40">
      <Navbar />
      <h2 className="text-3xl font-bold mb-4">Staff List</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {staffs.map((staff) => (
          <div
            key={staff.id}
            className="p-4 bg-white rounded shadow flex items-center"
          >
            <img
              src={staff.avatar}
              alt={staff.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-xl">{staff.name}</p>
              <p>{staff.address}</p>
              <p>Age: {staff.age}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
