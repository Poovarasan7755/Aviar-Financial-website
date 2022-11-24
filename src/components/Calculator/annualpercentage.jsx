import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import Calculator from "./calculator";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function Annualpercentage() {
  const [fixedRate, setFixedRate] = useState(true);
  const [adjustableRate, setAdjustableRate] = useState(false);
  const [enterTotalClosingCosts, setEnterTotalClosingCosts] = useState(true);
  const [enterClosingCostsIndividually, setEnterClosingCostsIndividually] = useState(false);
  const [finalValue, setFinalValue] = useState(0);

  const loginPageStyle = {
    margin: "32px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
  };
  const validationSchema = Yup.object().shape({
    loanAmount: Yup.string().required("required"),
    interestRate: Yup.string().required("required"),
    loanTerm: Yup.string().required("required"),
    totalClosingCosts: Yup.string().required("required"),
  });

  //submit Form
  const submitForm = (values) => {
    console.log("values", values);
    const LoanAmount = values.loanAmount;
    const Interest = values.interestRate / 100;
    const LoanTerm = values.loanTerm;
    const A = Interest / 12;
    const B = A + 1;
    const c = LoanTerm * 12;
    const C = -c;
    const D = B ** C;
    const E = 1 - D;
    const F = LoanAmount * A;
    const G = F / E;
    console.log("LoanAmount", LoanAmount);
    console.log("Interest :>> ", Interest);
    console.log("LoanTerm", LoanTerm);
    console.log("A :>> ", A);
    console.log("B", B);
    console.log("C", C);
    console.log("D :>> ", D);
    console.log("E", E);
    console.log("F :>> ", F);
    console.log("G", G);
    setFinalValue(G);
  };

  return (
    <div>
      <Container fluid>
        <div
          className="color mt-5 "
          style={{
            backgroundImage: `url("https://asset-service-bucket-prod.s3.amazonaws.com/f0544e8f-5a69-480f-b1de-156918163c82")`,
          }}
        >
          <div className="overlay-text-text">
            <div className="page-name">
              <h2>ANNUAL PERCENTAGE RATE CALCULATOR</h2>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <Row style={loginPageStyle} className="w-100">
            <Col>
              <h5 className="calculator-heading">
                Annual Percentage Rate (APR)
                <br /> Calculator
              </h5>
              <p className="w-75 calculator-decsription">Calculate the annual percentage rate for a loan.</p>
              <Card className="pe-5 pt-5 ps-3 me-3 w-75 Calculator-color" style={{ backgroundColor: "#f7f7f7" }}>
                <Formik
                  initialValues={{
                    loanAmount: "",
                    interestRate: "",
                    loanTerm: "",
                    loanType: "",
                    fixedRate: fixedRate,
                    adjustableRate: adjustableRate,
                    enterTotalClosingCosts: "",
                    enterClosingCostsIndividually: "",
                    closingCost: "",
                    totalClosingCosts: "1000",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { handleChange, handleSubmit, setFieldValue, values, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group>
                          <Form.Label>Loan Amount</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="0.00"
                            name="loanAmount"
                            value={values.loanAmount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage className="error text-danger" component="span" name="loanAmount" />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="interestRate"
                            placeholder="0"
                            value={values.interestRate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage className="error text-danger" component="span" name="interestRate" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Loan Term</Form.Label>
                          <Form.Control
                            type="number"
                            name="loanTerm"
                            placeholder="Years"
                            value={values.loanTerm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage className="error text-danger" component="span" name="loanTerm" />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Loan Type</Form.Label>
                          <Form.Check
                            type="radio"
                            label=" Fixed Rate"
                            name="fixedRate"
                            checked={fixedRate}
                            onClick={() => {
                              setFixedRate(!fixedRate);
                              setAdjustableRate(!adjustableRate);
                            }}
                          />
                          <Form.Check
                            type="radio"
                            label=" Adjustable Rate"
                            name="adjustableRate"
                            checked={adjustableRate}
                            onClick={() => {
                              setAdjustableRate(!adjustableRate);
                              setFixedRate(!fixedRate);
                            }}
                          />
                        </Form.Group>
                        {adjustableRate === true ? (
                          <>
                            <Form.Group>
                              <Form.Label>Max Periodic Rate Increase</Form.Label>
                              <Form.Control
                                type="number"
                                name="maxPeriodicRateIncrease"
                                placeholder="0"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="maxPeriodicRateIncrease"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Max Lifetime Rate Increase</Form.Label>
                              <Form.Control
                                type="number"
                                name="maxPeriodicRateIncrease"
                                placeholder="0"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="maxPeriodicRateIncrease"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Present Rate Changes After</Form.Label>
                              <Form.Control
                                type="number"
                                name="presentRateChangesAfter"
                                placeholder="Months"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="presentRateChangesAfter"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Rate Can Change Every</Form.Label>
                              <Form.Control
                                type="number"
                                name="rateCanChangeEvery"
                                placeholder="Months"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage className="error text-danger" component="span" name="rateCanChangeEvery" />
                            </Form.Group>
                          </>
                        ) : (
                          ""
                        )}
                        <Form.Group>
                          <Form.Label>Closing Costs</Form.Label>
                          <Form.Check
                            type="radio"
                            label="Enter Total Closing Costs"
                            name="enterTotalClosingCosts"
                            checked={enterTotalClosingCosts}
                            onClick={() => {
                              setEnterTotalClosingCosts(!enterTotalClosingCosts);
                              setEnterClosingCostsIndividually(!enterClosingCostsIndividually);
                            }}
                          />
                          <Form.Check
                            type="radio"
                            label="Enter Closing Costs Individually"
                            name="enterClosingCostsIndividually"
                            checked={enterClosingCostsIndividually}
                            onClick={() => {
                              setEnterClosingCostsIndividually(!enterClosingCostsIndividually);
                              setEnterTotalClosingCosts(!enterTotalClosingCosts);
                            }}
                          />
                        </Form.Group>

                        {enterClosingCostsIndividually === true ? (
                          <>
                            <Form.Group>
                              <Form.Label>Points to Lender</Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="0"
                                name="pointstoLender"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage className="error text-danger" component="span" name="pointstoLender" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Loan Origination Fee to Lender</Form.Label>
                              <Form.Control
                                type="number"
                                name="loanOriginationFeetoLender"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="loanOriginationFeetoLender"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Points to Broker</Form.Label>
                              <Form.Control
                                type="number"
                                name="pointstoBroker"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage className="error text-danger" component="span" name="pointstoBroker" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Loan Origination Fee to Broker</Form.Label>
                              <Form.Control
                                type="number"
                                name="loanOriginationFeetoBroker"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="loanOriginationFeetoBroker"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Yearly Private Mortgage Insurance</Form.Label>
                              <Form.Control
                                type="number"
                                name="yearlyPrivateMortgageInsurance"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="yearlyPrivateMortgageInsurance"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Lender's Inspection Fee</Form.Label>
                              <Form.Control
                                type="number"
                                name="lenderInspectionFee"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage className="error text-danger" component="span" name="lenderInspectionFee" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Underwriting Review Fee</Form.Label>
                              <Form.Control
                                type="number"
                                name="underwritingReviewFee"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="underwritingReviewFee"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Application Fee</Form.Label>
                              <Form.Control
                                type="number"
                                name="applicationFee"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage className="error text-danger" component="span" name="applicationFee" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Broker Processing Fee</Form.Label>
                              <Form.Control
                                type="number"
                                name="brokerProcessingFee"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage className="error text-danger" component="span" name="brokerProcessingFee" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Other (excl Appraisal/Title/Escrow/Attorney)</Form.Label>
                              <Form.Control
                                type="number"
                                name="other"
                                placeholder="0.00"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage className="error text-danger" component="span" name="other" />
                            </Form.Group>
                          </>
                        ) : (
                          <Form.Group>
                            <Form.Label>Total Closing Costs</Form.Label>
                            <Form.Control
                              type="number"
                              name="totalClosingCosts"
                              value={values.totalClosingCosts}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorMessage className="error text-danger" component="span" name="totalClosingCosts" />
                          </Form.Group>
                        )}

                        <Form.Group className="mt-3">
                          <Button className="button_1" type="submit">
                            Calculate
                          </Button>
                        </Form.Group>

                        <p className="instruction mt-3 mb-5">
                          Default amounts are hypothetical and may not apply to your individual situation. This
                          calculator provides approximations for informational purposes only. Actual results will be
                          provided by your lender and will likely vary depending on your eligibility and current market
                          rates.
                        </p>
                      </Form>
                    );
                  }}
                </Formik>
              </Card>
            </Col>
          </Row>
          <Col className="mt-5" style={{ marginLeft: "-10%" }}>
            <h5 className="mt-2 mb-5">Results</h5>
            <div className="mt-5">
              <h6 className="calculator-heading">Initial Monthly Payment</h6>
              <p>{finalValue?.toFixed(2)}</p>
            </div>
            <div className="mt-2">
              <h6 className="calculator-heading">APR</h6>
              <p>0%</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-end mt-5">
            <p className=" calculator-heading me-2">Print</p>
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default Annualpercentage;
