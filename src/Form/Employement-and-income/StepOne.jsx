import React, { useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import "../../css/Form.scss";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../container/Sidebar";

const ownership = [
  { label: "I have ownership share of less than 25%.", value: "I have ownership share of less than 25%." },
  { Label: "I have ownership share of 25% or more.", value: "I have ownership share of 25% or more." },
];
const Income = [
  { label: "Accessory Unit Income", value: "Accessory Unit Income" },
  { label: "Alimony", value: "Alimony" },
  { label: "AutoMobile Allowance", value: "AutoMobile Allowance" },
  { label: "Boarder Income", value: "Boarder Income" },
  { label: "Capital Gains", value: "Capital Gains" },
  { label: "Child Support", value: "Child Support" },
  { label: "Defined Contribution Plan", value: "Defined Contribution Plan" },
  { label: "Disability", value: "Disability" },
  { label: "Dividends Interest", value: "Dividends Interest" },
  { label: "Foster Care", value: "Foster Care" },
  { label: "Housing Allowance", value: "Housing Allowance" },
  { label: "Housing Choice Voucher Program", value: "Housing Choice Voucher Program" },
  { label: "Mortgage Credit Certificate", value: "Mortgage Credit Certificate" },
  { label: "Mortgage Differential", value: "Mortgage Differential" },
  { label: "Non Borrower Household Income", value: "Non Borrower Household Income" },
  { label: "Notes Receivable Installment", value: "Notes Receivable Installment" },
  { label: "Others", value: "Others" },
  { label: "Pension", value: "Pension" },
  { label: "Public Assistance", value: "Public Assistance" },
  { label: "Royalties", value: "Royalties" },
  { label: "Separate Maintenance", value: "Separate Maintenance" },
  { label: "Social Security", value: "Social Security" },
  { label: "Temporary Leave", value: "Temporary Leave" },
  { label: "Tip Income", value: "Tip Income" },
  { label: "Trust", value: "Trust" },
  { label: "Unemployment", value: "Unemployment" },
  { label: "VA Benefits NonEducational", value: "VA Benefits NonEducational" },
];

function Employement() {
  const navigate = useNavigate();
  const [addEmp, setAddEmp] = useState(false);
  const [defaultField, setDefaultField] = useState(true);
  const [selfemp, setSelfemp] = useState(false);
  const [currentJob, setCurrentJob] = useState(false);
  const [militerypay, setMiliterypay] = useState(false);
  const [income, setIncome] = useState(false);
  const [formValues, setFormValues] = useState([
    { EmpName: "", BusinesPhone: "", position: "", StartDate: "", EndDate: "", OwnerName: "", MonthlyIncome: "" },
  ]);
  const [addnlIncome, setAddnlIncome] = useState([{ Amount: "", Income: "" }]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let handleChangeChange = (i, e) => {
    let newAddnlIncome = [...addnlIncome];
    newAddnlIncome[i][e.target.name] = e.target.value;
    setAddnlIncome(newAddnlIncome);
  };

  let addIncomeField = (i, e) => {
    setAddnlIncome([...addnlIncome, { Amount: "", Income: "" }]);
  };

  let addFormFields = (i, e) => {
    setFormValues([
      ...formValues,
      { EmpName: "", BusinesPhone: "", position: "", StartDate: "", EndDate: "", OwnerName: "", MonthlyIncome: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let removeIncomeField = (i) => {
    let newIncomevalues = [...addnlIncome];
    newIncomevalues.splice(i, 1);
    setAddnlIncome(newIncomevalues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  let handlesubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(addnlIncome));
  };

  return (
    <div className="site-maincontent home-content open">
      <div style={{ minHeight: "calc(100vh - 200px)" }}>
        <Container>
          <Form onSubmit={handleSubmit} className="px-4">
            <div>
              <h3 className="mt-5" style={{ color: "#0bf" }}>
                My Loan Application
              </h3>
            </div>
            <h5 className="mt-3">Borrower Employment</h5>
            <p>
              Please provide your employment information for the past 2 years. If you do not remember the exact dates of
              your previous employment, please enter estimated dates.
            </p>
            {formValues.map((element, index) => (
              <div key={index}>
                <div className="Empoyement mt-4">
                  <Button className="px-5">Hide</Button>

                  {index ? (
                    <Button type="button" className="px-4" onClick={() => removeFormFields(index)}>
                      Remove
                    </Button>
                  ) : null}
                </div>
                <Form.Group className="mt-5 d-flex flex-direction-row">
                  {" "}
                  <Form.Check
                    aria-label="option 1"
                    value={element.option1 || ""}
                    onClick={() => {
                      setCurrentJob(!currentJob);
                      setDefaultField(false);
                      setSelfemp(false);
                    }}
                  />
                  <text className="mx-3">Current job</text>
                </Form.Group>
                <Form.Group className="mt-5 d-flex flex-direction-row">
                  {" "}
                  <Form.Check
                    aria-label="option 2"
                    value={element.option2 || ""}
                    onClick={() => {
                      setCurrentJob(false);
                      setDefaultField(!defaultField);
                      setSelfemp(false);
                    }}
                  />
                  <text className="mx-3">
                    I am employed by a family member, property seller, real estate agent, or other party to the
                    transaction.
                  </text>
                </Form.Group>
                <Form.Group className="mt-5 d-flex flex-direction-row">
                  {" "}
                  <Form.Check
                    aria-label="option 3"
                    value={element.option3 || ""}
                    onClick={() => {
                      setCurrentJob(false);
                      setDefaultField(false);
                      setSelfemp(!selfemp);
                    }}
                  />
                  <text className="mx-3">Self-Employed</text>
                </Form.Group>
                {defaultField === true ? (
                  <div>
                    <Row>
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Employer Name</Form.Label>
                          <Form.Control
                            placeholder=" Employer Name"
                            type="string"
                            id="name"
                            name="EmpName"
                            value={element.EmpName || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Business Phone</Form.Label>
                          <Form.Control
                            placeholder="Business Phone"
                            type="number"
                            id="number"
                            name="BusinesPhone"
                            value={element.BusinesPhone || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Position</Form.Label>
                          <Form.Control
                            placeholder="Position"
                            type="string"
                            id="Position"
                            name="position"
                            value={element.position || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control
                            type="date"
                            id="date"
                            name="StartDate"
                            value={element.StartDate || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>End Date</Form.Label>
                          <Form.Control
                            type="date"
                            id="date"
                            name="EndDate"
                            value={element.EndDate || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                ) : null}
                {currentJob === true ? (
                  <div>
                    <Row>
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Employer Name</Form.Label>
                          <Form.Control
                            placeholder=" Employer Name"
                            type="string"
                            id="name"
                            name="EmpName"
                            value={element.EmpName || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Business Phone</Form.Label>
                          <Form.Control
                            placeholder="Business Phone"
                            type="number"
                            id="number"
                            name="BusinesPhone"
                            value={element.BusinesPhone || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Position</Form.Label>
                          <Form.Control
                            placeholder="Position"
                            type="string"
                            id="Position"
                            name="position"
                            value={element.position || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control
                            type="date"
                            id="date"
                            name="StartDate"
                            value={element.StartDate || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col></Col>
                    </Row>
                  </div>
                ) : null}

                {selfemp === true ? (
                  <div>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>Ownership Share</Form.Label>
                          <Select name="Select One" options={ownership} value={element.OwnerName || ""} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>Monthly Income (or Loss) </Form.Label>
                          <Form.Control
                            type="string"
                            placeholder="$"
                            name="MonthlyIncome"
                            value={element.MonthlyIncome || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Employer Name</Form.Label>
                          <Form.Control
                            placeholder=" Employer Name"
                            type="string"
                            id="name"
                            name="EmpName"
                            value={element.EmpName || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Business Phone</Form.Label>
                          <Form.Control
                            placeholder="Business Phone"
                            type="number"
                            id="number"
                            name="BusinesPhone"
                            value={element.BusinesPhone || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mt-3">
                          <Form.Label>Position</Form.Label>
                          <Form.Control
                            placeholder="Position"
                            type="string"
                            id="Position"
                            name="position"
                            value={element.position || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control
                            type="date"
                            id="date"
                            name="StartDate"
                            value={element.StartDate || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mt-3">
                          <Form.Label>End Date</Form.Label>
                          <Form.Control
                            type="date"
                            id="date"
                            name="EndDate"
                            value={element.EndDate || ""}
                            onChange={(e) => handleChange(index, e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </div>
                ) : null}
              </div>
            ))}

            <Form.Group className="mt-4">
              <Button onClick={() => addFormFields()}>Add Another Employer</Button>
            </Form.Group>
            <h4 className="mt-4 mb-2">Additional Gross Monthly Income</h4>
            <p>
              Please enter any other gross monthly income not related to employment below. Include only the income that
              you want to use towards qualifying for a loan.
            </p>
            <p>
              <b>Notice:</b>
              Alimony, child support, or separate maintenance income need not be revealed if the borrower or co-borrower
              does not choose to have it considered for repaying this loan.{" "}
            </p>
          </Form>
          <Form onSubmit={handlesubmit} className="px-3">
            {addnlIncome.map((element, index) => (
              <div key={index}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mt-3">
                      <Form.Label>Income Source</Form.Label>
                      <Select
                        name="Select One"
                        options={Income}
                        value={element.Income || ""}
                        onChange={(e) => handleChangeChange(index, e)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mt-3">
                      <Form.Label>Amount</Form.Label>
                      <Form.Control
                        type="String"
                        placeholder="$"
                        id="amount"
                        name="Amount"
                        value={element.Amount || ""}
                        onChange={(e) => handleChangeChange(index, e)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                {index ? (
                  <Form.Group className="mt-3 d-flex justify-content-end">
                    <Button className="px-4" onClick={() => removeIncomeField(index)}>
                      Remove
                    </Button>
                  </Form.Group>
                ) : null}
              </div>
            ))}
            <Form.Group className="mt-4">
              <Button onClick={() => addIncomeField()}>Add Additional Income</Button>
            </Form.Group>

            <h4 className="mt-4">Total Additional Income</h4>
            <p>$ 0</p>
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
            <Button className="button-Style next-btn-color " onClick={() => navigate("/forms/liabilities")}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Employement;
