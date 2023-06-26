import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Navbar from "./Navbar";

function Dashboard() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    // Fetch staff data from API or database
    fetchStaffs();
  }, []);

  const fetchStaffs = async () => {
    try {
      const response = await fetch(
        "https://6499006379fbe9bcf83e8fe9.mockapi.io/api/v1/data"
      );
      const data = await response.json();
      setStaffs(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Perform delete logic
      await fetch(
        `https://6499006379fbe9bcf83e8fe9.mockapi.io/api/v1/data/${id}`,
        {
          method: "DELETE",
        }
      );
      // Update staff list
      fetchStaffs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-self-center gap-4 pt-6 w-full mt-20">
      <Navbar />
      <p className="w-full text-textColor">Staff Dashboard</p>
      <Table className="w-full">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staffs.map((staff) => (
            <TableRow key={staff.id}>
              <TableCell>{staff.name}</TableCell>
              <TableCell>{staff.address}</TableCell>
              <TableCell>{staff.age}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  component={Link}
                  to={`/detail/${staff.id}`}
                >
                  Detail
                </Button>
                <Button
                  variant="outlined"
                  color="info"
                  component={Link}
                  to={`/edit/${staff.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(staff.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" component={Link} to="/add">
        Create New
      </Button>
    </div>
  );
}

export default Dashboard;
