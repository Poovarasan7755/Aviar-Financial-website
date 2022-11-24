import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Select from "react-select";
import Sidebar from "../../container/Sidebar";

const Option = [
  {
    value: "Single Family Resitence",
    label: "Single Family Resitence",
  },
  {
    value: "Single Family Resitence with Home Owners Association",
    label: "Single Family Resitence with Home Owners Association",
  },
  { value: "Condominium", label: "Condominium" },
  { value: "2+ Units", label: "2+ Units" },
  { value: "Co-Operative", label: "Co-Operative" },
  { value: "Manufactured/Home (Single Wide)", label: "Manufactured/Home (Single Wide)" },
  { value: "Manufactured/Home (Multiwide)", label: "Manufactured/Home (Multiwide)" },
];

const One = [
  {
    value: "IL",
    label: "IL",
  },
];
const Options = [
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

const values = [
  {
    value: "Apartment",
    label: "Apartment",
  },
  {
    value: "Basement",
    label: "Basement",
  },
  {
    value: "Building",
    label: "Building",
  },
  {
    value: "Condo",
    label: "Condo",
  },
  {
    value: "Department",
    label: "Department",
  },
  {
    value: "Floor",
    label: "",
  },
  {
    value: "Front",
    label: "Front",
  },
  {
    value: "Hanger",
    label: "Hanger",
  },
  {
    value: "Key",
    label: "Key",
  },
  {
    value: "Lobby",
    label: "Lobby",
  },
  {
    value: "Lot",
    label: "Lot",
  },
  {
    value: "Lower",
    label: "Lower",
  },
  {
    value: "Office",
    label: "Office",
  },
  {
    value: "Penthouse",
    label: "Penthouse",
  },
  {
    value: "Pier",
    label: "Pier",
  },
  {
    value: "Rear",
    label: "Rear",
  },
  {
    value: "Room",
    label: "Room",
  },
  {
    value: "Side",
    label: "Side",
  },
  {
    value: "Space",
    label: "Space",
  },
  {
    value: "Stop",
    label: "Stop",
  },
  {
    value: "Suite",
    label: "Suite",
  },
  {
    value: "Trailer",
    label: "Trailer",
  },
  {
    value: "Unit",
    label: "Unit",
  },
  {
    value: "Upper",
    label: "Upper",
  },
];
const Method = [
  { value: "Manufactured", label: "Manufactured" },
  { value: "Site Built", label: "Site Built" },
  { value: "Other", label: "Other" },
];

export default function StepTwo(props) {
  const location = useLocation();
  console.log("location....", location.state.type);
  const [cashValue, setCashvalue] = useState(location.state.type);
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [show, setShow] = useState(false);
  const [protoType, setProtoType] = useState();

  const ChangeType = (event) => {
    setProtoType(event.value);
  };

  return (
    <div>
      <Sidebar />
      <div className="site-maincontent home-content open">
        <div style={{ minHeight: "calc(100vh - 200px)" }}>
          <Container fluid>
            <Form className="px-4">
              <div className=" mt-5 mb-4">
                <h3 style={{ color: "#0bf" }}>My Loan Application</h3>
              </div>
              {cashValue == 2 || cashValue == 3 ? (
                <div>
                  <Form.Group>
                    <Form.Label>Are you refinancing your primary home?</Form.Label>
                    <div className="d-flex flex-direction-row">
                      <Button className="mx-4 px-3">Yes</Button>
                      <Button className="px-3">No</Button>
                    </div>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label>When did you acquire this property?</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label>What was the original price of the home?</Form.Label>
                    <Form.Control type="string" placeholder="$" />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mt-4">
                        <Form.Label>Unit Type</Form.Label>
                        <Select name="selector" placeholder="Select One" options={values} className="2" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mt-4">
                        <Form.Label>Unit #</Form.Label>
                        <Form.Control type="string" name="unit" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city" name="city" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={4}>
                      <Form.Group className="mt-3">
                        <Form.Label>State</Form.Label>
                        <Select name="" placeholder="Select One" options={One} />
                      </Form.Group>
                    </Col>
                    <Col xs={4} className="mt-3">
                      <Form.Group>
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="Zip Code" name="Zip Code" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="container-width " xs={12} md={6}>
                      <Form.Group className="mt-4">
                        <Form.Label>Property Type</Form.Label>
                        <Select name="Select One" options={Option} onChange={(event) => ChangeType(event)} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mt-4">
                        <Form.Label>Property Use</Form.Label>
                        <Select name="Select One" options={Options} />
                      </Form.Group>
                    </Col>
                  </Row>
                  {console.log("prototype", protoType)}
                  {protoType === "Single Family Resitence" ||
                  protoType === "Single Family Resitence with Home Owners Association" ||
                  protoType === "2+ Unit" ||
                  protoType === "Co-Operative" ||
                  protoType === "Manufactured/Home (Single Wide)" ||
                  protoType === "Manufactured/Home (Multiwide)" ? (
                    <div className="mt-3">
                      <Row>
                        <Col xs={12} md={6}>
                          <Form.Group className="mt-4">
                            <Form.Label>Construction Method Type</Form.Label>
                            <Select name="Select One" options={Method} />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}></Col>
                      </Row>
                    </div>
                  ) : null}
                </div>
              ) : (
                <div>
                  {" "}
                  <Form.Group>
                    <h5 className="mb-3">Property Details</h5>

                    <Form.Label>Have you found the house you want to buy?</Form.Label>
                    <div className="d-flex mt-2 mb-3 ">
                      <Button
                        className="mx-5 px-4"
                        onClick={() => {
                          setView(true);
                          setShow(false);
                        }}
                      >
                        Yes
                      </Button>
                      <Button
                        className="px-4"
                        onClick={() => {
                          setShow(true);
                          setView(false);
                        }}
                      >
                        No
                      </Button>
                    </div>
                  </Form.Group>
                  {view === true ? (
                    <div>
                      <Form.Group className="mt-3">
                        <Form.Label>Have you signed a purchase contract yet?</Form.Label>
                        <div className="d-flex mt-2 mb-3 ">
                          <Button className="mx-5 px-4">Yes</Button>
                          <Button className="px-4">No</Button>
                        </div>
                      </Form.Group>
                      <Row lassName="mt-4">
                        <Col xs={12} md={6}>
                          <Form.Group className="mt-3">
                            <Form.Label>Unit Type</Form.Label>
                            <Select name="selector" placeholder="Select One" options={values} />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group className="mt-3">
                            <Form.Label>Unit #</Form.Label>
                            <Form.Control type="string" name="unit" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="city" name="city" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>State</Form.Label>
                            <Select name="" placeholder="Select One" options={One} />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="Zip Code" name="Zip Code" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  {show === true ? (
                    <div>
                      <Row>
                        <Col xs={12} md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="city" name="city" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>State</Form.Label>
                            <Select name="" placeholder="Select One" options={One} />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                          <Form.Group className="mt-3">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="Zip Code" name="Zip Code" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <Row>
                    <Col className="container-width" xs={12} md={6}>
                      <Form.Group className="mt-4">
                        <Form.Label>Property Type</Form.Label>
                        <Select name="Select One" options={Option} onChange={(event) => ChangeType(event)} />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group className="mt-4">
                        <Form.Label>Property Use</Form.Label>
                        <Select name="Select One" options={Options} />
                      </Form.Group>
                    </Col>
                  </Row>
                  {console.log("prototype", protoType)}
                  {protoType === "Single Family Resitence" ||
                  protoType === "Single Family Resitence with Home Owners Association" ||
                  protoType === "2+ Unit" ||
                  protoType === "Co-Operative" ||
                  protoType === "Manufactured/Home (Single Wide)" ||
                  protoType === "Manufactured/Home (Multiwide)" ? (
                    <div className="mt-3">
                      <Row>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label>Construction Method Type</Form.Label>
                            <Select name="Select One" options={Method} />
                          </Form.Group>
                        </Col>
                        <Col md={6}></Col>
                      </Row>
                    </div>
                  ) : null}
                </div>
              )}
            </Form>
          </Container>
        </div>
        <Row style={{ margin: "100px 30px 10px 30px" }}>
          <Col>
            <div>
              <Button className="button-Style back-btn-color" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
          </Col>

          <Col className="d-flex justify-content-end">
            <Button className="button-Style save-btn-color me-3">Save</Button>
            <Button className="button-Style next-btn-color" onClick={() => navigate("/step-3")}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
