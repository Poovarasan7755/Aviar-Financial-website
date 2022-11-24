import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Sidebar from "../../container/Sidebar";

const initialValues = { email: "", firstName: "", lastName: "", date: "", securitynumber: "" };

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  date: Yup.string().required("Date is required"),
  securitynumber: Yup.string().required("Security number is Required"),
});

const options = [
  {
    value: "U.S. Citizen",
    label: "U.S. Citizen",
  },
  {
    value: "Permanent Resident Alien",
    label: "Permanent Resident Alien",
  },
  {
    value: "Non-Permanent Resident Alien",
    label: "Non-Permanent Resident Alien",
  },
];

const option = [
  { value: "Married", label: "Married" },
  { value: "UnMarried (single,divorced,widowed)", label: "UnMarried (single,divorced,widowed)" },
  { value: "Separated", label: "Separated" },
];

function StepFour() {
  const navigate = useNavigate();
  const [value, setValue] = useState(false);
  const [show, setShow] = useState(false);

  const submitForm = (values) => {
    navigate("/step-5");
  };

  const [formValues, setFormValues] = useState([{ firstName: "", lastName: "", middleName: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { firstName: "", lastName: "", middleName: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Sidebar />
        <Formik initialValues={initialValues} validationSchema={SignInSchema} onSubmit={(values) => submitForm(values)}>
          {(formik) => {
            const { values, handleChange, handleSubmit, handleBlur, isValid } = formik;
            return (
              <Container>
                <Form onSubmit={handleSubmit}>
                  <div className="px-3">
                    <div className="mt-4 mb-5 mx-3">
                      <h3 style={{ color: "#0bf" }}>My Loan Application</h3>
                    </div>
                    <h5 className="mb-3">Borrower Name</h5>
                    {formValues.map((element, index) => (
                      <Row key={index}>
                        <Col xs={12} md={3}>
                          <Form.Group className="mt-3">
                            <Form.Label>
                              First Name<b style={{ color: "red" }}>*</b>
                            </Form.Label>
                            <Form.Control
                              name="firstName"
                              placeholder="First Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                            />
                            <ErrorMessage name="firstName" component="span" className="error text-danger" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={3}>
                          <Form.Group className="mt-3">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="middleName"
                              placeholder="middleName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={3}>
                          <Form.Group className="mt-3">
                            <Form.Label>
                              Last Name<b style={{ color: "red" }}>*</b>
                            </Form.Label>
                            <Form.Control
                              name="lastName"
                              placeholder="lastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="text"
                            />
                            <ErrorMessage name="lastName" component="span" className="error text-danger" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={3}>
                          <Form.Group className="mt-3">
                            <Form.Label>Suffix</Form.Label>
                            <Form.Control type="text" placeholder="Suffix" />
                          </Form.Group>
                        </Col>
                        {index ? (
                          <div>
                            <Button type="button" className="px-3 mt-4" onClick={() => removeFormFields(index)}>
                              Remove
                            </Button>
                          </div>
                        ) : null}
                      </Row>
                    ))}

                    <Button className="mt-4 mb-4" onClick={() => addFormFields()}>
                      Add Alternate Name
                    </Button>
                    <h5>Borrower Information</h5>
                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>
                            My email address is: <b style={{ color: "red" }}>*</b>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="email"
                          />
                          <ErrorMessage name="email" component="span" className="error text-danger" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>
                            My date of birth is: <b style={{ color: "red" }}>*</b>
                          </Form.Label>
                          <Form.Control type="date" name="date" id="date" onChange={handleChange} onBlur={handleBlur} />
                          <ErrorMessage name="date" component="span" className="error text-danger" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>
                            My social security number is: <b style={{ color: "red" }}>*</b>
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="securitynumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="number"
                          />{" "}
                          <ErrorMessage name="securitynumber" component="span" className="error text-danger" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>Citizenship</Form.Label>
                          <Select name="Select One" options={options} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mt-3">
                      <Form.Label>What is your Marital Status?</Form.Label>
                      <Select name="select" options={option} />
                    </Form.Group>
                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group className="mt-3 ">
                          <Form.Label>My cell phone is:</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group className="mt-3 ">
                          <Form.Label>My home phone number is:</Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group className="mt-3 ">
                          <Form.Label>Work Phone </Form.Label>
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="mt-5 mb-5">
                      <Form.Group>
                        {" "}
                        <h6>Privacy Policy</h6>
                        <div className="d-flex flex-direction-row">
                          {" "}
                          <Form.Check aria-label="option 1" />
                          <text className="mx-3">I/We have read and accepted the terms of the Privacy Policy</text>
                        </div>
                      </Form.Group>
                    </div>
                    <div>
                      <h5>Borrower Military Service</h5>
                      <Form.Label>
                        Did you (or your deceased spouse) ever serve, or are you currently serving, in the United States
                        Armed Forces?
                      </Form.Label>
                      <div className="mt-3">
                        {" "}
                        <Button className="mx-3 px-4" onClick={() => setShow(true)}>
                          Yes
                        </Button>
                        <Button className="px-4" onClick={() => setShow(false)}>
                          No
                        </Button>
                      </div>
                      {show === true ? (
                        <div>
                          <div className="d-flex flex-direction-row mb-3 mt-3">
                            <Form.Check className=" mx-3" aria-label="option 1" />
                            <text>Currently serving on active duty</text>
                          </div>
                          <Form.Group className="mb-4">
                            <Form.Label className="mb-2">Expiration date of service/tour</Form.Label>
                            <Form.Control type="date" name="date" id="date" />
                          </Form.Group>
                          <div className="d-flex flex-direction-row mb-3 ">
                            <Form.Check className=" mx-3" aria-label="option 1" />
                            <text>Currently retired, discharged, or separated from service</text>
                          </div>
                          <div className="d-flex flex-direction-row mb-3 ">
                            <Form.Check className=" mx-3" aria-label="option 1" />
                            <text>
                              Only period of service was as non-activated member of the Reserve or National Guard
                            </text>
                          </div>
                          <div className="d-flex flex-direction-row mb-3 ">
                            <Form.Check className=" mx-3" aria-label="option 1" />
                            <text>Surviving spouse</text>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-4">
                      <h5>TCPA Consent Agreement</h5>
                      <p>
                        By providing your phone number, you consent and agree to being contacted by us regarding your
                        loan inquiry and mortgage products and services at the telephone number provided. You agree that
                        we, or one of our authorized third parties, may contact you, including through automated means,
                        via telephone or mobile device, even if your telephone number is listed on a Do-Not-Call
                        registry. This consent is not required to obtain our goods and services. If you prefer to be
                        contacted by other means, please contact us via the information below.
                      </p>
                    </div>
                  </div>

                  <Row style={{ margin: "150px 30px 10px 30px" }}>
                    <Col>
                      <div>
                        <Button className="button-Style back-btn-color" onClick={() => navigate(-1)}>
                          Back
                        </Button>
                      </div>
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <Button className="button-Style save-btn-color me-3">Save</Button>
                      <Button className="button-Style next-btn-color" type="submit">
                        Next
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Container>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
export default StepFour;
