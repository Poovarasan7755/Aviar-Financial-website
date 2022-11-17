import React, { useState } from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "../../css/Form.scss";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { values } from "../UnitType.js";
import { states } from "../state.js";
import Footer from "../../comman/footer";
import Sidebar from "../../container/Sidebar";

const Home = [
  {
    value: "Primary Home",
    label: "Primary Home",
  },
  {
    value: "Secondary Home",
    label: "Secondary Home",
  },
  {
    value: "Investment Home",
    label: "Investment Home",
  },
];

const State = [
  { label: "Sold", value: "Sold" },
  { label: "Pending Sale", value: "Pending Sale" },
  { label: "Retain for Primary or Secondary Resisdence", value: "Retain for Primary or Secondary Resisdence" },
];
const Property = [
  {
    label: "Single Family",
    value: "Single Family",
  },
  {
    label: "Condo",
    value: "Condo",
  },
  {
    label: "TownHome",
    value: "TownHome",
  },
  {
    label: "Co-Operative",
    value: "Co-Operative",
  },
  {
    label: "2-4 Units",
    value: "2-4 Units",
  },
  {
    label: "More than 4 units",
    value: "More than 4 units",
  },
  {
    label: "MobileHome",
    value: "MobileHome",
  },
  {
    label: "Commercial",
    value: "Commercial",
  },
  {
    label: "Home and Business combined",
    value: "Home and Business combined",
  },
  {
    label: "Mixed Use",
    value: "Mixed Use",
  },
  {
    label: "Farm",
    value: "Farm",
  },
  {
    label: "Land",
    value: "Land",
  },
];

const propertyType = [
  { label: "Primary Residence", value: "Primary Residence" },
  { label: "Second Home", value: "Second Home" },
  { label: "Investment", value: "Investment" },
  { label: "Other", value: "Other" },
];

function AssetPageOne() {
  const [data, setData] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState([
    {
      address: "",
      unit: "",
      city: "",
      state: "",
      market: "",
      outBalance: "",
      monthlyPayment: "",
      purchasePrice: "",
      date: "",
      rentalIncome: "",
      taxInsurance: "",
    },
  ]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        address: "",
        unit: "",
        city: "",
        state: "",
        market: "",
        outBalance: "",
        monthlyPayment: "",
        purchasePrice: "",
        date: "",
        rentalIncome: "",
        taxInsurance: "",
      },
    ]);
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
        <Container>
          <Form onSubmit={handleSubmit}>
            <div className="px-3">
              <div className="mt-4">
                <h3 style={{ color: "#0bf" }}>My Loan Application</h3>
              </div>
              <div className="asset">
                {" "}
                <h4 className="">Real Estate Owned</h4>
                <Button onClick={() => addFormFields()}>Add Property</Button>
              </div>
              {formValues.map((element, index) => (
                <div key={index}>
                  <hr className="mt-4 mb-3" />

                  <div className="d-flex flex-direction-row mt-3">
                    <Button className="px-4" onClick={() => removeFormFields(index)}>
                      Remove
                    </Button>
                  </div>

                  <Form.Group className="mt-4">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="string"
                      id="address"
                      name="address"
                      value={element.address || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mt-3">
                        <Form.Label>Unit Type</Form.Label>
                        <Select name="Select One" options={values} onChange={(e) => handleChange(index, e)} />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mt-3">
                        <Form.Label>Unit #</Form.Label>
                        <Form.Control
                          name="unit"
                          type="string"
                          id="unit"
                          value={element.unit || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="string"
                          name="city"
                          id="city"
                          placeholder="city"
                          value={element.city || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>State</Form.Label>
                        <Select name="Select One" options={states} onChange={(e) => handleChange(index, e)} />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          type="string"
                          name="state"
                          id="state"
                          placeholder="State"
                          value={element.state || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Property Status</Form.Label>
                        <Select name="Select One" options={State} onChange={(e) => handleChange(index, e)} />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Property Currently Used As</Form.Label>
                        <Select name="Select One" options={Home} onChange={(e) => handleChange(index, e)} />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Type of Property</Form.Label>
                        <Select name="Select One" options={Property} onChange={(e) => handleChange(index, e)} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mt-4">
                    <Form.Label>Property Will Be Used As</Form.Label>
                    <Select name="Select One" options={propertyType} onChange={(e) => handleChange(index, e)} />
                  </Form.Group>
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Present Market Value</Form.Label>
                        <Form.Control
                          type="string"
                          placeholder="$"
                          name="market"
                          value={element.market || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Outstanding Mortgage Balance</Form.Label>
                        <Form.Control
                          type="string"
                          name="outBalance"
                          placeholder="$"
                          value={element.outBalance || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>Monthly Mortgage Payment</Form.Label>
                        <Form.Control
                          type="string"
                          name="monthlyPayment"
                          placeholder="$"
                          value={element.monthlyPayment || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mt-3">
                        <Form.Label>Purchase Price</Form.Label>
                        <Form.Control
                          type="string"
                          name="purchasePrice"
                          placeholder="$"
                          value={element.purchasePrice || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mt-3">
                        <Form.Label>Date Acquired</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="$"
                          name="date"
                          id="date"
                          value={element.date || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mt-3">
                        <Form.Label>Gross Rental Income</Form.Label>
                        <Form.Control
                          type="string"
                          name="rentalIncome"
                          placeholder="$"
                          value={element.rentalIncome || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mt-3">
                        <Form.Label>Taxes, Insurance, and Other</Form.Label>
                        <Form.Control
                          type="string"
                          name="taxInsurance"
                          placeholder="$"
                          value={element.taxInsurance || ""}
                          onChange={(e) => handleChange(index, e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              ))}
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
                <Button
                  className="button-Style next-btn-color "
                  onClick={() => navigate("/employement-and-income-details")}
                >
                  Next
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default AssetPageOne;
