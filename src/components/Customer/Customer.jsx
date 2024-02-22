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
import "./Customer.css";

const Customer = () => {
  const [customer, setCustomer] = useState([]);
  const [selectedCustomer, setselectedCustomer] = useState(null);
  const [modalAdd, setModalAdd] = useState(false); // State cho modal thêm
  const [modalUpdate, setModalUpdate] = useState(false); // State cho modal cập nhật
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const response = await axios.get(
        "https://server-travel-booking.onrender.com/users"
      );
      setCustomer(response.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        `https://server-travel-booking.onrender.com/users/update/${id}`,
        formData
      );
      setselectedCustomer(response.data);
      toggleModalUpdate();
    } catch (error) {
      console.error("Error for update:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://server-travel-booking.onrender.com/users/delete/${id}`
      );
      fetchCustomer();
    } catch (error) {
      console.error("Error deleting user:", error);
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
        "https://server-travel-booking.onrender.com/users",
        formData
      );
      fetchCustomer();
      toggleModalAdd();
      // Reset form data after submit
      setFormData({
        userName: "",
        email: "",
        password: "",
        role: "",
      });
    } catch (error) {
      console.error("Error adding users:", error);
    }
  };

  return (
    <Col lg={9} className="customers__content">
      <h3>Customer</h3>
      <div className="customers__add">
        <Button color="primary" onClick={toggleModalAdd}>
          Add customer
        </Button>
      </div>
      <div className="table-container">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customer.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.userName}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
                <td>{customer.role}</td>

                <td>
                  <Button
                    color="warning"
                    onClick={() => handleUpdate(customer._id)}
                  >
                    Update
                  </Button>
                  -
                  <Button
                    color="danger"
                    onClick={() => handleDelete(customer._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* Modal for Update customer */}
        <Modal isOpen={modalUpdate} toggle={toggleModalUpdate}>
          <ModalHeader toggle={toggleModalUpdate}>Update customer</ModalHeader>
          <ModalBody>
            {/* Render form to update customer */}
            {selectedCustomer && (
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedCustomer.userName}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedCustomer.email}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedCustomer.password}
                  />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={selectedCustomer.role}
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

        {/* Modal for Add customer */}
        <Modal isOpen={modalAdd} toggle={toggleModalAdd}>
          <ModalHeader toggle={toggleModalAdd}>Add customer</ModalHeader>
          <ModalBody>
            {/* Render form to add new customer */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.userName}
                  onChange={(e) => handleChange(e, "userName")}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => handleChange(e, "email")}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.password}
                  onChange={(e) => handleChange(e, "password")}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.role}
                  onChange={(e) => handleChange(e, "role")}
                />
              </div>
              <Button type="submit" color="primary">
                Add customer
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

export default Customer;
