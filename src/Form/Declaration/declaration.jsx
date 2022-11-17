import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../container/Sidebar";
import Footer from "../../comman/footer";

const Option = [
  { label: "Yes", value: "1" },
  { label: "No", value: "2" },
];
function Declaration() {
  const navigate = useNavigate();
  const [primaryA, setPrimaryA] = useState(false);
  const [primaryB, setPrimaryB] = useState(false);
  const [primaryC, setPrimaryC] = useState(false);
  const [primaryD1, setPrimaryD1] = useState(false);
  const [primaryD2, setPrimaryD2] = useState(false);
  const [primaryE, setPrimaryE] = useState(false);
  const [primaryF, setPrimaryF] = useState(false);
  const [primaryG, setPrimaryG] = useState(false);
  const [primaryH, setPrimaryH] = useState(false);
  const [primaryI, setPrimaryI] = useState(false);
  const [primaryJ, setPrimaryJ] = useState(false);
  const [primaryK, setPrimaryK] = useState(false);
  const [primaryL, setPrimaryL] = useState(false);
  const [primaryM, setPrimaryM] = useState(false);

  const PrimaryChange = (event) => {
    setPrimaryA(event.value);
  };
  const PrimaryBChange = (event) => {
    setPrimaryB(event.value);
  };
  const PrimaryCChange = (event) => {
    setPrimaryC(event.value);
  };
  const PrimaryD1Change = (event) => {
    setPrimaryD1(event.value);
  };
  const PrimaryD2Change = (event) => {
    setPrimaryD2(event.value);
  };
  const PrimaryEChange = (event) => {
    setPrimaryE(event.value);
  };
  const PrimaryFChange = (event) => {
    setPrimaryF(event.value);
  };
  const PrimaryGChange = (event) => {
    setPrimaryG(event.value);
  };
  const PrimaryHChange = (event) => {
    setPrimaryH(event.value);
  };
  const PrimaryIChange = (event) => {
    setPrimaryI(event.value);
  };
  const PrimaryJChange = (event) => {
    setPrimaryJ(event.value);
  };
  const PrimaryKChange = (event) => {
    setPrimaryK(event.value);
  };
  const PrimaryLChange = (event) => {
    setPrimaryL(event.value);
  };
  const PrimaryMChange = (event) => {
    setPrimaryM(event.value);
  };

  return (
    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Sidebar />
        <Container>
          <Form>
            <div className="px-4">
              <div>
                <h3 className="mt-3">My Loan Application</h3>
                <h5 className="mt-4">Borrower Declarations</h5>
                <h6 className="mt-3">About this Property and Your Money for this Loan</h6>
              </div>
              <hr />
              <Row>
                <Col md={8}>
                  <p>
                    <b>A.</b> Will you occupy the property as your primary residence?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryA == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p telephone manipol song>
                    <b>B.</b> If this is a Purchase Transaction: Do you have a family relationship or business
                    affiliation with the seller of the property?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryBChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryB == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p>
                    <b>C. </b> Are you borrowing any money for this real estate transaction (e.g., money for your
                    closing costs or down payment) or obtaining any money from another party, such as the seller or
                    realtor, that you have not disclosed on this loan application?
                  </p>
                </Col>
                <Col className="mt-3">
                  <Form.Group telephone manipol song>
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryCChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryC == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>What is the amount of this money?</Form.Label>
                    <Form.Control type="string" placeholder="$" />
                  </Form.Group>
                </div>
              ) : null}{" "}
              <Row>
                <Col md={8}>
                  <p className="mt-3">
                    <b>D.1. </b>Have you or will you be applying for a mortgage loan on another property (not the
                    property securing this loan) on or before closing this transaction that is not disclosed on this
                    loan application?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryD1Change(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryD1 == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p className="mt-3">
                    <b>D.2. </b>Have you or will you be applying for any new credit (e.g., installment loan, credit
                    card, etc.) on or before closing this loan that is not disclosed on this application?
                  </p>
                </Col>
                <Col>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryD2Change(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryD2 == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p className="mt-3">
                    <b>E. </b>Will this property be subject to a lien that could take priority over the first mortgage
                    lien, such as a clean energy lien paid through your property taxes (e.g., the Property Assessed
                    Clean Energy Program)?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryEChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryE == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <h5 className="mt-3 mb-3">About Your Finances</h5>
              <Row>
                <Col md={8}>
                  <p className="mt-3">
                    <b>F. </b>Are you a co-signer or guarantor on any debt or loan that is not disclosed on this
                    application?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryFChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryF == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p className="mt-3">
                    <b>G. </b>Are there any outstanding judgments against you?
                  </p>
                </Col>
                <Col>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryGChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryG == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p>
                    <b>H. </b>Are you currently delinquent or in default on a federal debt?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryHChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryH == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p className="mt-3">
                    <b>I. </b>Are you a party to a lawsuit in which you potentially have any personal financial
                    liability?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryIChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryI == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p className="mt-3">
                    <b>J. </b>Have you conveyed title to any property in lieu of foreclosure in the past 7 years?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryJChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryJ == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row className="mt-4">
                <Col md={8}>
                  <p>
                    <b>K. </b>Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby
                    the property was sold to a third party and the Lender agreed to accept less than the outstanding
                    mortgage balance due?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryKChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryK == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row className="mt-4">
                <Col md={8}>
                  <p className="mt-3">
                    <b>L. </b>Have you had property foreclosed upon in the last 7 years?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryLChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryL == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                </div>
              ) : null}
              <Row>
                <Col md={8}>
                  <p className="mt-3">
                    <b>M. </b>Have you declared bankruptcy within the past 7 years?
                  </p>
                </Col>
                <Col md={4}>
                  <Form.Group className="mt-3">
                    <Select name="Select One" options={Option} onChange={(event) => PrimaryMChange(event)} />
                  </Form.Group>
                </Col>
              </Row>
              {primaryM == 1 ? (
                <div>
                  <Form.Group className="mt-3">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="string" />
                  </Form.Group>
                  <p className="mt-4">Identify the type(s) of bankruptcy </p>
                  <Form.Group>
                    <div className="d-flex flex-direction-row">
                      {" "}
                      <Form.Check aria-label="option 1" />
                      <p className="mx-3">Chapter 7</p>
                    </div>
                    <div className="d-flex flex-direction-row">
                      {" "}
                      <Form.Check aria-label="option 2" />
                      <p className="mx-3">Chapter 11</p>
                    </div>
                    <div className="d-flex flex-direction-row">
                      {" "}
                      <Form.Check aria-label="option 3" />
                      <p className="mx-3">Chapter 12</p>
                    </div>
                    <div className="d-flex flex-direction-row">
                      {" "}
                      <Form.Check aria-label="option 4" />
                      <p className="mx-3">Chapter 13</p>
                    </div>
                  </Form.Group>
                </div>
              ) : null}
            </div>
          </Form>
        </Container>
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
            <Button className="button-Style next-btn-color " onClick={() => navigate("/declaration-page")}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default Declaration;
