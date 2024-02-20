import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import axios from "axios";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [modalAdd, setModalAdd] = useState(false); // State cho modal thêm tour
  const [modalUpdate, setModalUpdate] = useState(false); // State cho modal cập nhật tour
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    distance: "",
    maxGroupSize: "",
    price: "",
    desc: "",
    photo: "",
  });

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

  const handleUpdate = async (id) => {
    try {
      const response = await axios.get(
        `https://server-travel-booking.onrender.com/tours/${id}`
      );
      setSelectedTour(response.data);
      toggleModalUpdate();
    } catch (error) {
      console.error("Error fetching tour for update:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://server-travel-booking.onrender.com/tours/${id}`
      );
      fetchTour();
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  const toggleModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const toggleModalUpdate = () => {
    setModalUpdate(!modalUpdate);
  };

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://server-travel-booking.onrender.com/tours",
        formData
      );
      fetchTour();
      toggleModalAdd();
      // Reset form data after submit
      setFormData({
        title: "",
        city: "",
        distance: "",
        maxGroupSize: "",
        price: "",
        desc: "",
        photo: "",
      });
    } catch (error) {
      console.error("Error adding tour:", error);
    }
  };

  return (
    <Col lg={9} className="tours__content">
      <h3>Tours</h3>
      <div className="tours__add">
        <Button color="primary" onClick={toggleModalAdd}>
          Add Tour
        </Button>
      </div>
      <div className="table-container">
        <Table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Title</th>
              <th>City</th>
              <th>Distance</th>
              <th>MaxSize</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour._id}>
                <td>
                  <img src={tour.photo} alt="" style={{ width: "100px" }} />
                </td>
                <td>{tour.title}</td>
                <td>{tour.city}</td>
                <td>{tour.distance}</td>
                <td>{tour.maxGroupSize}</td>
                <td>{tour.price}</td>
                <td>
                  <Button
                    color="warning"
                    onClick={() => handleUpdate(tour._id)}
                  >
                    Update
                  </Button>
                  -
                  <Button color="danger" onClick={() => handleDelete(tour._id)}>
                    Delete
                  </Button>
                </td>
                <td>
                  <Link to={`/tours/${tour._id}`}>Detail</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* Modal for Update Tour */}
        <Modal isOpen={modalUpdate} toggle={toggleModalUpdate}>
          <ModalHeader toggle={toggleModalUpdate}>Update Tour</ModalHeader>
          <ModalBody>
            {/* Render form to update tour */}
            {selectedTour && (
              <form>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedTour.title}
                  />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedTour.city}
                  />
                </div>
                <div className="form-group">
                  <label>Distance</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={selectedTour.distance}
                  />
                </div>
                <div className="form-group">
                  <label>MaxGroupSize</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={selectedTour.maxGroupSize}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedTour.desc}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={selectedTour.price}
                  />
                </div>

                <div className="form-group">
                  <label>Photo</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedTour.photo}
                  />
                </div>
              </form>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleModalUpdate}>
              Update
            </Button>{" "}
            <Button color="secondary" onClick={toggleModalUpdate}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {/* Modal for Add Tour */}
        <Modal isOpen={modalAdd} toggle={toggleModalAdd}>
          <ModalHeader toggle={toggleModalAdd}>Add Tour</ModalHeader>
          <ModalBody>
            {/* Render form to add new tour */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.title}
                  onChange={(e) => handleChange(e, "title")}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.city}
                  onChange={(e) => handleChange(e, "city")}
                />
              </div>
              <div className="form-group">
                <label>Distance</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.distance}
                  onChange={(e) => handleChange(e, "distance")}
                />
              </div>
              <div className="form-group">
                <label>Max Group Size</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.maxGroupSize}
                  onChange={(e) => handleChange(e, "maxGroupSize")}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.desc}
                  onChange={(e) => handleChange(e, "desc")}
                />
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.price}
                  onChange={(e) => handleChange(e, "price")}
                />
              </div>
              <div className="form-group">
                <label>Photo</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.photo}
                  onChange={(e) => handleChange(e, "photo")}
                />
              </div>
              <Button type="submit" color="primary">
                Add Tour
              </Button>{" "}
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModalAdd}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </Col>
  );
};

export default Tours;
