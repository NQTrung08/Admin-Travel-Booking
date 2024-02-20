import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const MyTable = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTour();
  }, []);

  const fetchTour = async () => {
    try {
      const response = await axios.get(
        "https://server-travel-booking.onrender.com/tours"
      );
      setTours(response.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://server-travel-booking.onrender.com/tours/${id}`
      );
      fetchTour();
    } catch (error) {
      console.error("Error deleting tours:", error);
    }
  };

  return (
    <div>
      <div className="table">
        <h3>Tours</h3>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>City</th>
              <th>Distance</th>
              <th>MaxGroupSize</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id}>
                <td>{tour.title}</td>
                <td>{tour.city}</td>
                <td>{tour.distance}</td>
                <td>{tour.maxGroupSize}</td>
                <td>{tour.price}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => handleDelete(tour._id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Link>
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyTable;
