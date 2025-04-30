import React, { useState } from "react";
import {
  Form,
  Button,
  Alert,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import "./FormPage.css"; // Custom styles

const FormPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    company: "",
    phone: "",
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((val) => val === "")) {
      setValidated(true);
      return;
    }

    dispatch(addUser(form));
    setForm({
      firstName: "",
      lastName: "",
      address: "",
      company: "",
      phone: "",
    });
    setValidated(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="form-page-bg">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg">
              <Card.Header className="custom-bg text-white text-center">
                <h4 className="mb-0">Add New User</h4>
              </Card.Header>
              <Card.Body>
                {submitted && (
                  <Alert variant="success" className="text-center">
                    ✅ Record added successfully!
                  </Alert>
                )}
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  {["firstName", "lastName", "address", "company", "phone"].map(
                    (field, i) => (
                      <Form.Group key={i} className="mb-3">
                        <Form.Label>
                          {field.replace(/^\w/, (c) => c.toUpperCase())}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={`Enter ${field}`}
                          name={field}
                          value={form[field]}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          This field is required
                        </Form.Control.Feedback>
                      </Form.Group>
                    )
                  )}
                  <div className="text-center">
                    <Button
                      className="custom-bg"
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormPage;
