import React, { useState } from "react";
import { Container, Form, Button, Row, Col, T } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../comman/footer";
import Sidebar from "../../container/Sidebar";

import "../../css/Form.scss";

export default function Summary() {
  const navigate = useNavigate();
  const [value, setValue] = useState(false);

  const ChangeValue = () => {
    setValue(!value);
  };

  return (
    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Sidebar />
        <Container>
          <Form className="px-3">
            <h3 className="mt-3" style={{ color: "#0bf" }}>
              My Loan Application
            </h3>
            <h5 className="mt-5 mb-3">Summary</h5>
            <div className="summary-page">
              {" "}
              <Button onClick={() => ChangeValue()}>Collapse All</Button>
            </div>
            <hr className="mt-4 mb-4" />
            {value === false ? (
              <div>
                <h5>Loan Details</h5>
                <Row>
                  <Col md={6}>
                    <text className="mt-4">Purpose of your Loan</text>
                  </Col>
                  <Col md={6} className="  summary-page">
                    <Button className="px-4" onClick={() => navigate("/step-1")}>
                      Edit
                    </Button>
                  </Col>
                </Row>
                <p>Property Details</p>
                <hr className="mt-4 mb-4" />
                <h5>Personal Information</h5>
                <Row>
                  <Col md={6}>
                    {" "}
                    <data>Joint Credit</data>
                    <br />
                    <data>Borrower Name</data> <br />
                    <data>Borrower Information</data> <br />
                    <data>Borrower Military Service</data> <br />
                    <data>Where do you currently live?</data> <br />
                    <data>Borrower Mailing Address</data>
                  </Col>
                  <Col md={6} className="  summary-page ">
                    <div>
                      {" "}
                      <Button className="px-4" onClick={() => navigate("/step-3")}>
                        Edit
                      </Button>
                    </div>
                  </Col>
                </Row>
                <hr className="mt-4 mb-4" />
                <h5>Assets</h5>
                <div className="  summary-page ">
                  {" "}
                  <Button className="px-4" onClick={() => navigate("/asset")}>
                    Edit
                  </Button>
                </div>
                <p>Manage Your Properties</p>
                <hr className="mt-4 mb-4" />
                <h5>Employment and Income</h5>
                <div className="  summary-page ">
                  {" "}
                  <Button className="px-4" onClick={() => navigate("/employement-and-income-details")}>
                    Edit
                  </Button>
                </div>
                <text>Borrower Employment</text>
                <p>Additional Gross Monthly Income</p>
                <hr className="mt-4 mb-4" />
                <h5>Liabilities</h5>
                <div className="  summary-page ">
                  {" "}
                  <Button className="px-4" onClick={() => navigate("/liabilities")}>
                    Edit
                  </Button>
                </div>
                <p>Manage Other Expenses</p>
                <hr className="mt-4 mb-4" />
                <h5>Declarations</h5>
                <div className="  summary-page ">
                  {" "}
                  <Button className="px-4" onClick={() => navigate("/declaration")}>
                    Edit
                  </Button>
                </div>
                <text>Borrower Declarations</text>
                <p>Borrower Demographic Information</p>
                <hr className="mt-4 mb-4" />
              </div>
            ) : (
              <div>
                <h5>Loan Details</h5>
                <div className="  summary-page ">
                  <Button className="px-4" onClick={() => navigate("/step-1")}>
                    Edit
                  </Button>
                </div>
                <Row>
                  <Col md={6}>
                    <p>Tell us about who referred you</p>
                    <p>--</p>
                    <b>Purpose of your Loan</b>
                    <p>What would you like to do?</p>
                    <p>--</p>
                    <p>What is the price of the home?</p>
                    <p>--</p> <p>Where is the money for the down payment coming from?</p>
                    <p>--</p>
                  </Col>
                  <Col md={6}>
                    <b>Property Details</b>
                    <p>Have you found the house you want to buy?</p>
                    <p>--</p>
                    <p>Property Type</p>
                    <p>--</p>
                    <p>Property Use</p>
                    <p>--</p>
                  </Col>
                </Row>{" "}
                <hr className="mt-4 mb-4" />
                <h5>Personal Information</h5>
                <div className="  summary-page ">
                  <Button className="px-4" onClick={() => navigate("/step-3")}>
                    Edit
                  </Button>
                </div>
                <Row>
                  <Col md={6}>
                    <h5>Joint Credit</h5>
                    <p>Are you applying for joint credit with a co-borrower? </p>
                    <p>--</p>
                    <p>How many total borrowers, including yourself, are applying for credit? </p>
                    <p>1</p>
                  </Col>
                  <Col md={6}>
                    <h5>Borrower Name</h5>
                    <p>FirstName </p>
                    <p>Firstname</p>
                    <p>MiddleName </p>
                    <p>--</p>
                    <p>LastName </p>
                    <p>S</p>
                    <p>Suffix </p>
                    <p>--</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h5>Borrower Information</h5>
                    <text>My email address is: *</text>
                    <p>
                      <b>Google@gmail.com</b>
                    </p>
                    <text>My date of birth is:</text>
                    <p>--</p>
                    <text>My social security number is:</text>
                    <p>--</p>
                    <text>Citizenship</text>
                    <p>--</p>
                    <text>What is your Marital Status?</text>
                    <p>--</p>
                    <text>My cell phone is:</text>
                    <p>--</p>
                    <text>My home phone number is:</text>
                    <p>--</p>
                    <text>Work Phone</text>
                    <p>--</p>
                    <text>I/We have read and accepted the terms of the</text>
                    <a href="/#">Privacy Policy</a>
                    <p>--</p>
                  </Col>
                  <Col md={6}>
                    <h5>Borrower Military Service</h5>
                    <p>
                      Did you (or your deceased spouse) ever serve, or are you currently serving, in the United States
                      Armed Forces?
                    </p>
                    <p>--</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <h5>Where do you currently live?</h5>
                    <text>Address 1</text>
                    <p>--</p>
                    <text>Unit Type</text>
                    <p>--</p>
                    <text>Unit</text>
                    <p>--</p>
                    <text>City</text>
                    <p>--</p>
                    <text>State</text>
                    <p>--</p>
                    <text>Zip Code</text>
                    <p>--</p>
                    <text>Country</text>
                    <p>--</p>
                    <text>Estimated number of years</text>
                    <p>--</p>
                    <text>Estimated number of months</text>
                    <p>--</p>
                    <text>Housing </text>
                    <p>--</p>
                  </Col>
                  <Col md={6}>
                    <h5>Borrower Mailing Address</h5>
                    <p>Is your mailing address the same as your current address?</p>
                    <p>Yes</p>
                  </Col>
                </Row>
                <hr className="mt-4 mb-4" />
                <h5>Assets</h5>
                <div className="  summary-page ">
                  <Button className="px-4" onClick={() => navigate("/asset")}>
                    Edit
                  </Button>{" "}
                </div>
                <text>Manage Your Properties</text>
                <hr className="mt-4 mb-4" />
                <h5>Employment and Income</h5>
                <div className="  summary-page ">
                  <Button className="px-4" onClick={() => navigate("/employement-and-income-details")}>
                    Edit
                  </Button>
                </div>
                <Row>
                  <Col md={6}>
                    <h5>Borrower Employment</h5>
                    <text>Current job</text>
                    <p>Yes</p>
                    <text>
                      I am employed by a family member, property seller, real estate agent, or other party to the
                      transaction.
                    </text>
                    <p>--</p>
                    <text>Self-Employed</text>
                    <p>--</p>
                    <text>Employer Name</text>
                    <p>--</p>
                    <text>Business Phone</text>
                    <p>--</p>
                    <text>Position</text>
                    <p>--</p>
                    <text className="mt-3 ">Start Date</text>
                    <p>--</p>
                    <text>Years in this job</text>
                    <p className="mb-3">--</p>
                    <text>Seasonal Income</text>
                    <p>--</p>
                    <text>I receive military pay.</text>
                    <p>--</p>
                    <text>My monthly base salary is:</text>
                    <p>--</p>
                    <text>My estimated monthly overtime is:</text>
                    <p>--</p>
                    <text>My estimated monthly bonuses total:</text>
                    <p>--</p>
                    <text>My estimated monthly total commissions are:</text>
                    <p>--</p>
                    <text>Other</text>
                    <p>--</p>
                    <p>
                      <b>Total Borrower Income:</b>
                    </p>
                  </Col>
                  <Col md={6}>
                    <h5>Additional Gross Monthly Income</h5>
                    <text>Income Source</text>
                    <p>--</p>
                    <text>Amount</text>
                    <p>--</p>
                    <p>
                      <b>Total Additional Amount</b>
                    </p>
                  </Col>
                </Row>
                <hr className="mt-4 mb-4" />
                <h5>Liabilities</h5>
                <div className="  summary-page ">
                  <Button className="px-4" onClick={() => navigate("/liabilities")}>
                    Edit
                  </Button>
                </div>
                <p>Manage Other Expenses</p>
                <hr className="mt-4 mb-4" />
                <h3>Declarations</h3>
                <div className="  summary-page ">
                  <Button className="px-4" onClick={() => navigate("/declaration")}>
                    Edit
                  </Button>
                </div>
                <Row>
                  <Col md={6}>
                    <h6>Borrower Declarations</h6>
                    <text>A. Will you occupy the property as your primary residence?</text>
                    <p>--</p>
                    <text>
                      B. If this is a Purchase Transaction: Do you have a family relationship or business affiliation
                      with the seller of the property?
                    </text>
                    <p>--</p>
                    <text>
                      C. Are you borrowing any money for this real estate transaction (e.g., money for your closing
                      costs or down payment) or obtaining any money from another party, such as the seller or realtor,
                      that you have not disclosed on this loan application?
                    </text>
                    <p>--</p>
                    <text>
                      D. 1. Have you or will you be applying for a mortgage loan on another property (not the property
                      securing this loan) on or before closing this transaction that is not disclosed on this loan
                      application?
                    </text>
                    <p>--</p>
                    <text>
                      D. 2. Have you or will you be applying for any new credit (e.g., installment loan, credit card,
                      etc.) on or before closing this loan that is not disclosed on this application?
                    </text>
                    <p>--</p>
                    <text>
                      E. Will this property be subject to a lien that could take priority over the first mortgage lien,
                      such as a clean energy lien paid through your property taxes (e.g., the Property Assessed Clean
                      Energy Program)?
                    </text>
                    <p>--</p>
                    <text>
                      F. Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?
                    </text>
                    <p>--</p>
                    <text>G. Are there any outstanding judgments against you?</text>
                    <p>--</p>
                    <text>H. Are you currently delinquent or in default on a federal debt?</text>
                    <p>--</p>
                    <text>
                      I. Are you a party to a lawsuit in which you potentially have any personal financial liability?
                    </text>
                    <p>--</p>
                    <text>J. Have you conveyed title to any property in lieu of foreclosure in the past 7 years?</text>
                    <p>--</p>
                    <text>
                      K. Within the past 7 years, have you completed a pre-foreclosure sale or short sale, whereby the
                      property was sold to a third party and the Lender agreed to accept less than the outstanding
                      mortgage balance due?
                    </text>
                    <p>--</p>
                    <text>L. Have you had property foreclosed upon in the last 7 years?</text>
                    <p>--</p>
                    <text>M. Have you declared bankruptcy within the past 7 years?</text>
                    <p>--</p>
                  </Col>
                  <Col md={6} className="px-5">
                    <h6>Borrower Demographic Information</h6>
                    <text>Hispanic or Latino</text>
                    <p>--</p>
                    <text>Mexican</text>
                    <p>--</p>
                    <text>Puerto Rican</text>
                    <p>--</p>
                    <text>Cuban</text>
                    <p>--</p>
                    <text>Other Hispanic or Latino - Enter Origin</text>
                    <p>--</p>
                    <p>--</p>
                    <text>Not Hispanic or Latino</text>
                    <p>--</p>
                    <text>I do not wish to provide this information.</text>
                    <p>--</p>
                    <text>American Indian or Alaska Native</text>
                    <p>--</p>
                    <text>Asian</text>
                    <p>--</p>
                    <text>Asian Indian</text>
                    <p>--</p>
                    <text>Chinese</text>
                    <p>--</p>
                    <text>Filipino</text>
                    <p>--</p>
                    <text>Japanese</text>
                    <p>--</p>
                    <text>Korean</text>
                    <p>--</p>
                    <text>Vietnamese</text>
                    <p>--</p>
                    <text>Other Asian - Enter Race:</text>
                    <p>--</p>
                    <p>--</p>
                    <text>Black or African American</text>
                    <p>--</p>
                    <text>Native Hawaiian or Other Pacific Islander</text>
                    <p>--</p>
                    <text>Native Hawaiian</text>
                    <p>--</p>
                    <text>Guamanian or Chamorro</text>
                    <p>--</p>
                    <text>Samoan</text>
                    <p>--</p>
                    <text>Other Pacific Islander - Enter Race:</text>
                    <p>--</p>
                    <p>--</p>
                    <text>White</text>
                    <p>--</p>
                    <text>I do not wish to provide this information.</text>
                    <p>--</p>
                    <text>Female</text>
                    <p>--</p>
                    <text>Male</text>
                    <p>--</p>
                    <text>I do not wish to provide this information.</text>
                    <p>--</p>
                  </Col>
                </Row>
                <hr className="mt-4 mb-3" />
              </div>
            )}
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
            <Button className="button-Style next-btn-color " onClick={() => navigate("/summary")}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
