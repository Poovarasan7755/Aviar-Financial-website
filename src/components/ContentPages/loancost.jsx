import React from "react";
import { Container, Row } from "react-bootstrap";

function loancost() {
  return (
    <div>
      <div>
        <Container fluid>
          <div
            className="color mt-5"
            style={{
              backgroundImage: `url("https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/e94234e5-2e7f-405e-a296-7d28a6fdd2b7")`,
            }}
          >
            <div className="overlay-effect">
              {" "}
              <h2 className="name">Loan Related Closing Costs</h2>
            </div>
          </div>
        </Container>
        <Container fluid style={{ width: "90%" }}>
          <h5 className="headline mt-4">Loan Origination Fees</h5>
          <p className="para">
            This covers the administrative expenses in setting-up and processing the loan. The loan origination fee may
            be a percentage of the mortgage amount.
          </p>
          <h5 className="headline">Points (optional)</h5>
          <p className="para">
            An option for the home buyer is to pay points to lower the interest rate at which the loan will be repaid.
            Each point equals 1 percent of the mortgage amount. For example: on a $150,000 loan, 1 point would equal
            $1,500
          </p>
          <h5 className="headline">Appraisal Fee</h5>
          <p className="para">
            The fee for having the house appraised may be incorporated into the closing costs or payment may be required
            by the lender at the time the loan application is submitted.
          </p>
          <h5 className="headline">Credit Report</h5>
          <p className="para">
            The lender uses a credit report to determine the creditworthiness of the loan applicant. This fee is often
            paid when the loan application is submitted.
          </p>
          <h5 className="headline">Interest Payment</h5>
          <p className="para">
            Typically the buyer is required to pay interest on the mortgage loan to cover the time between the closing
            date and when the first mortgage payment period begins. For example: If closing is on May 15. Your first
            monthly payment begins to accrue interest on June 1 with your first mortgage payment due July 1. At closing
            an interest payment covering the accrual period between May 15 and May 31 may be required.
          </p>
          <h5 className="headline">Escrow Account</h5>
          <p className="para">
            At closing a payment may be required to fund the escrow account if the lender is paying home insurance,
            property taxes and/or other expenses out of the escrow account.
          </p>
          <p className="mb-5">
            <b>
              Have questions about the loan process? Call Vijay at <a href="309-750-1082">309-750-1082</a> . We answer
              questions about the loan process every day.
            </b>
          </p>
        </Container>
      </div>
    </div>
  );
}

export default loancost;
