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
  const [customers, setCustomer] = useState([]);
  const [selectedCustomer, setselectedCustomer] = useState(null);
  const [modalUpdate, setModalUpdate] = useState(false); // State cho modal cập nhật
 
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
      const response = await axios.get(
        `https://server-travel-booking.onrender.com/users/getUser/${id}`
      );
      
      setselectedCustomer(response.data);
      toggleModalUpdate();
    } catch (error) {
      console.error("Error for update:", error);
    }
  };

  const handleUpdateSubmit = async () => {
    try {
        await axios.put(
            `https://server-travel-booking.onrender.com/users/update/${selectedCustomer._id}`,
            selectedCustomer
        );
        fetchCustomer();
        toggleModalUpdate();
    } catch (error) {
        console.error("Error updating tour:", error);
    }
};

const handleUpdateChange = (e, field) => {
    setselectedCustomer({
        ...selectedCustomer,
        [field]: e.target.value,
    });
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

  const toggleModalUpdate = () => {
    setModalUpdate(!modalUpdate);
  };

  


  return (
    <Col lg={9} className="customers__content">
      <h3>Customer</h3>
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
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.userName}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
                <td>{customer.role}</td>

                <td>
                  <Button
                    color="btn btn-success"
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
                  <label>UserName</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedCustomer.userName}
                    onChange={(e) => handleUpdateChange(e, "userName")}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={selectedCustomer.email}
                    onChange={(e) => handleUpdateChange(e, "email")}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={selectedCustomer.password}
                    onChange={(e) => handleUpdateChange(e, "password")}
                  />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    className="form-control"
                    value={selectedCustomer.role}
                    onChange={(e) => handleUpdateChange(e, "role")}
                  />
                </div>
              </form>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdateSubmit}>
              Update
            </Button>{" "}
            <Button color="secondary" onClick={toggleModalUpdate}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        
      </div>
    </Col>
  );
};
export default Customer;
