import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Sidebar from "../../container/Sidebar";
import { states } from "../state";
import { values } from "../UnitType";

const options = [{ label: "US", value: "US" }];

const option = [
  { label: "Own", value: "1" },
  { label: "Rent", value: "2" },
  { label: "No primary housing expense", value: "3" },
];

function StepFive() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [previous, setPrevious] = useState(true);
  const [borrower, setBorrower] = useState(false);
  const [address, setAddress] = useState(false);
  const [previousAddress, setPreviousAddress] = useState(false);
  const [formValues, setFormValues] = useState([
    { address: "", adress: "", city: "", zipcode: "", year: "", month: "" },
  ]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { address: "", adress: "", city: "", zipcode: "", year: "", month: "" }]);
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

  const rent = (e) => {
    console.log("e", e.value);
    setValue(e.value);
  };

  return (
    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Container>
          <Form onSubmit={handleSubmit}>
            <div className="px-3">
              <div className="mt-3 mb-5">
                <h3 style={{ color: "#0bf" }}>My Loan Application</h3>
              </div>
              <h5 className="mb-3">Where do you currently live?</h5>

              {formValues.map((element, index) => (
                <div key={index}>
                  <Row>
                    <Col xs={12} md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Address 1</Form.Label>
                        <Form.Control
                          placeholder="Address1"
                          name="address"
                          id="address"
                          type="text"
                          onChange={(e) => handleChange(index, e)}
                          value={element.address || ""}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Unit Type</Form.Label>
                        <Select name="Select One" options={values} onChange={(e) => handleChange(index, e)} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Unit #</Form.Label>
                        <Form.Control
                          placeholder="Address"
                          name="adress"
                          id="adress"
                          type="text"
                          onChange={(e) => handleChange(index, e)}
                          value={element.adress || ""}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={3}>
                      <Form.Group className="mt-2 mb-2">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          id="city"
                          onChange={(e) => handleChange(index, e)}
                          value={element.city || ""}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={3}>
                      <Form.Group className="mt-2 mb-2">
                        <Form.Label>State</Form.Label>
                        <Select name="Select One" options={states} onChange={(e) => handleChange(index, e)} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={3}>
                      <Form.Group className="mt-2 mb-2">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          onChange={(e) => handleChange(index, e)}
                          value={element.zipcode || ""}
                        />{" "}
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={3}>
                      <Form.Group className="mt-2 mb-2">
                        <Form.Label>Country</Form.Label>
                        <Select name="Select One" options={options} onChange={(e) => handleChange(index, e)} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Label>How long have you been at this address?</Form.Label>
                  <Row>
                    <Col xs={12} md={6} className="d-flex flex-direction-row mt-2">
                      <Form.Control
                        type="year"
                        name="year"
                        id="year"
                        className="mx-4"
                        onChange={(e) => handleChange(index, e)}
                        value={element.year || ""}
                      />{" "}
                      <text>Estimated number of years</text>
                    </Col>{" "}
                    <Col xs={12} md={6} className="d-flex flex-direction-row mt-2">
                      <Form.Control
                        type="string"
                        name="month"
                        id="month"
                        className="mx-4"
                        onChange={(e) => handleChange(index, e)}
                        value={element.month || ""}
                      />{" "}
                      <text>Estimated number of months</text>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group className="mt-4">
                        <Form.Label>Housing</Form.Label>
                        <Select name="Select One" options={option} onChange={(event) => rent(event)} />
                      </Form.Group>
                    </Col>

                    {console.log("value", value)}
                    {value == 2 ? (
                      <Col xs={12} md={6} className="mt-4">
                        <Form.Group>
                          <Form.Label>Monthly Rent</Form.Label>
                          <Form.Control
                            type="number"
                            name="rent"
                            id="rent"
                            placeholder="$"
                            onChange={(e) => handleChange(index, e)}
                          />{" "}
                        </Form.Group>
                      </Col>
                    ) : null}
                  </Row>
                  {index ? (
                    <div className="mt-3">
                      <Button type="button" className="px-3" onClick={() => removeFormFields(index)}>
                        Romove
                      </Button>
                    </div>
                  ) : null}
                </div>
              ))}
              <Form.Group className="mt-3">
                <Button type="button" onClick={() => addFormFields()}>
                  Add Previous address
                </Button>
              </Form.Group>

              <Form.Group className="mt-4">
                <h4>Borrower Mailing Address</h4>

                <Form.Label className="mt-3 mb-3">Is your mailing address the same as your current address?</Form.Label>
              </Form.Group>
              <div className="d-flex flex-direction-row">
                <Button className="px-4 justify-content-space-evenly " onClick={() => setBorrower(false)}>
                  Yes
                </Button>{" "}
                <Button className="px-4 mx-4" onClick={() => setBorrower(true)}>
                  No
                </Button>
              </div>
              {borrower === true ? (
                <div>
                  <Row>
                    <Col xs={12} md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Address 1</Form.Label>
                        <Form.Control placeholder="Address" name="address" id="address" type="text" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Unit Type</Form.Label>
                        <Select name="Select One" options={values} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Unit #</Form.Label>
                        <Form.Control placeholder="Address" name="address" id="address" type="text" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={3}>
                      <Form.Group className="mt-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" id="city" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={3}>
                      <Form.Group className="mt-3">
                        <Form.Label>State</Form.Label>
                        <Select name="Select One" options={states} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={3}>
                      <Form.Group className="mt-3">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" name="zipcode" id="zipcode" />{" "}
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={3}>
                      <Form.Group className="mt-3">
                        <Form.Label>Country</Form.Label>
                        <Select name="Select One" options={options} />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              ) : null}
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
                <Button className="button-Style next-btn-color " onClick={() => navigate("/forms/asset")}>
                  Next
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
}
export default StepFive;
