import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    // Fetch staff data from API or database
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await fetch(
        `https:6499006379fbe9bcf83e8fe9.mockapi.io/api/v1/data/${id}`
      );
      const data = await response.json();
      setStaff(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    // Navigate back to dashboard
    navigate("/dashboard");
  };

  if (!staff) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <h2>Edit Staff</h2>
      <div>
        <strong>Name:</strong> {staff.name}
      </div>
      <div>
        <strong>Address:</strong> {staff.address}
      </div>
      <div>
        <strong>Age:</strong> {staff.age}
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Edit;
