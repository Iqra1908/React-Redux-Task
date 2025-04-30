import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Button,
  Card,
  Container,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import { deleteUser } from "../redux/userSlice";
import { FaTrash } from "react-icons/fa";
import "./RecordsPage.css";

const RecordsPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.address} ${user.company} ${user.phone}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (id) => {
    setSelectedUserId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteUser(selectedUserId));
    setShowModal(false);
    setSelectedUserId(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedUserId(null);
  };

  return (
    <div className="form-page-bg">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow-sm">
              <Card.Header className="bg-success text-white text-center">
                <h3 className="mb-0">User Records</h3>
              </Card.Header>
              <Card.Body>
                {/* Search Bar */}
                <Form.Control
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mb-3"
                />
                {filteredUsers.length === 0 ? (
                  <p className="text-center text-muted">No records found.</p>
                ) : (
                  <Table
                    bordered
                    hover
                    responsive
                    className="text-center user-table"
                  >
                    <thead className="custom-header">
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map((user, i) => (
                        <tr key={user.id}>
                          <td>{i + 1}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.address}</td>
                          <td>{user.company}</td>
                          <td>{user.phone}</td>
                          <td>
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => handleDeleteClick(user.id)}
                            >
                              <FaTrash />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Delete Confirmation Modal */}
        <Modal show={showModal} onHide={cancelDelete} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this user record? This action cannot
            be undone.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cancelDelete}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default RecordsPage;
