import React, { useState } from "react";
import { Container, Form, FormGroup, Col, Button, Row } from "react-bootstrap";

import "../../css/Form.scss";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Sidebar from "../../container/Sidebar";

const Option = [
  {
    value: "1",
    label: "Purchase a Home",
  },
  {
    value: "2",
    label: "No Cash-Out Refinance",
  },
  { value: "3", label: "Cash-Out Refinance" },
];

const Options = [
  {
    value: "Bridge Loan",
    label: "Bridge Loan",
  },
  {
    value: "Cash on Hand",
    label: "Cash on Hand",
  },
  {
    value: "Checking/Savings",
    label: "Checking/Savings",
  },
  {
    value: "Deposit on Sales Contract",
    label: "Deposit on Sales Contract",
  },
  {
    value: "Equity on Pending Sale",
    label: "Equity on Pending Sale",
  },
  {
    value: "Equity on Sold Property",
    label: "Equity on Sold Property",
  },
  {
    value: "Gift Funds",
    label: "Gift Funds",
  },
  {
    value: "Lot Equity",
    label: "Lot Equity",
  },
  {
    value: "Other Type of Down Payment",
    label: "Other Type of Down Payment",
  },
  {
    value: "Rent with Option to Purchase",
    label: "Rent with Option to Purchase",
  },
  {
    value: "Retirement Funds",
    label: "Retirement Funds",
  },
  {
    value: "Sale of chattel",
    label: "Sale of chattel",
  },
  {
    value: "Secured Borrowed Funds",
    label: "Secured Borrowed Funds",
  },
  {
    value: "Stock and Bonds",
    label: "Stock and Bonds",
  },
  {
    value: "Sweaty Equity",
    label: "Sweaty Equity",
  },
  {
    value: "Trade Equity",
    label: "Trade Equity",
  },
  {
    value: "Trust Funds",
    label: "Trust Funds",
  },
  {
    value: "Unsecured Borrowed Funds",
    label: "Unsecured Borrowed Funds",
  },
  {
    value: "FHA - Gift-Seller Funded",
    label: "FHA - Gift-Seller Funded",
  },
  {
    value: "FHA - Gift-Non Seller Funded",
    label: "FHA - Gift-Non Seller Funded",
  },
  {
    value: "FHA - Gift-Gov't Assistance",
    label: "FHA - Gift-Gov't Assistance",
  },
  {
    value: "FHA - Gift-Source Relative",
    label: "FHA - Gift-Source Relative",
  },
  {
    value: "FHA - Gift-Sourse Employer",
    label: "FHA - Gift-Sourse Employer",
  },
  {
    value: "FHA - Gift-N/A",
    label: "FHA - Gift-N/A",
  },
];

function StepOne() {
  const navigate = useNavigate();

  const [home, setHome] = useState(false);

  const loanPurpose = (e) => {
    console.log("event", e.value);
    setHome(e.value);

    //   if (e.value === "1") {
    //   setHome(true);
    // } else {
    //   console.log("test 2222");
    // }
  };

  const secondComponent = () => {
    navigate("/step-2", { state: { type: home } });
  };

  return (
    <Container fluid>
      <div className="site-maincontent home-content open">
        <div style={{ minHeight: "calc(100vh - 200px)" }}>
          <Sidebar />

          <Form onSubmit={() => alert("ok")}>
            <div className="px-4">
              <div className="d-flex justify-content-center mt-3">
                <h3 style={{ color: "#0bf" }}>My Loan Application </h3>
              </div>
              <FormGroup className="mt-4">
                <Form.Label>Tell us about who referred you</Form.Label>
                <Form.Control type="text" id="text" name="text" className="mt-2 mb-4" />
              </FormGroup>
              <Form.Group>
                <h4>Purpose of your Loan</h4>
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label>What would you like to do?</Form.Label>
                <Select
                  name="Select One"
                  options={Option}
                  onChange={(event) => {
                    loanPurpose(event);
                  }}
                />
              </Form.Group>
              {home === "1" ? (
                <div>
                  {" "}
                  <Form.Group className="mt-3">
                    <Form.Label>What is the price of the home?</Form.Label>
                    <Form.Control placeholder="$" type="string" className="mt-2 mb-3" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Where is the money for the down payment coming from?</Form.Label>
                    <Select name="select the Field" placeholder="Select One" options={Options} />
                  </Form.Group>
                </div>
              ) : (
                <Row>
                  <Col xs={12} sm={12} md={6}>
                    <Form.Group className="mt-4">
                      <Form.Label>How much do you approximately owe on this property?</Form.Label>
                      <Form.Control name="value" placeholder="$" className="mt-2" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={12} md={6}>
                    <Form.Group className="mt-4 ">
                      <Form.Label>How much money are you looking to borrow?</Form.Label>
                      <Form.Control name="value" placeholder="$" className="mt-2 page-one" />
                    </Form.Group>
                  </Col>
                </Row>
              )}
            </div>

            {/* <div className="d-flex justify-content-end  mt-5 mb-5">
          <Button className="mx-5 px-5">Save</Button>
          <Button className="px-5" onClick={() => secondComponent()}>
            Next
          </Button>
        </div> */}

            <Row style={{ margin: "100px 30px 10px 30px" }}>
              <Col className="d-flex justify-content-end">
                <Button className="px-4 me-3 button-Style save-btn-color">Save</Button>
                <Button className="px-4 button-Style next-btn-color" onClick={() => secondComponent()}>
                  Next
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default StepOne;
