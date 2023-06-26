import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Add() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    avatar: "",
    createdAt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    console.log(formData);
    // Reset form data
    setFormData({
      name: "",
      address: "",
      age: "",
      avatar: "",
      createdAt: "",
    });
  };

  return (
    <div>
      <h2>Add Staff</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextField
          name="age"
          label="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <TextField
          name="avatar"
          label="Avatar"
          value={formData.avatar}
          onChange={handleChange}
          required
        />
        <TextField
          name="createdAt"
          label="Created At"
          value={formData.createdAt}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Staff
        </Button>
      </form>
    </div>
  );
}

export default Add;
