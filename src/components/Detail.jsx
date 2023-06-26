import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Detail() {
  const { id } = useParams();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    // Fetch staff data from API or database
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await fetch(
        `https://6499006379fbe9bcf83e8fe9.mockapi.io/api/v1/data/${id}`
      );
      const data = await response.json();
      setStaff(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!staff) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Staff Detail</h2>
      <div className="mb-2">
        <strong className="mr-2">Name:</strong> {staff.name}
      </div>
      <div className="mb-2">
        <strong className="mr-2">Address:</strong> {staff.address}
      </div>
      <div className="mb-2">
        <strong className="mr-2">Age:</strong> {staff.age}
      </div>
      <div className="mb-2">
        <strong className="mr-2">Created At:</strong> {staff.createdAt}
      </div>
    </div>
  );
}

export default Detail;
