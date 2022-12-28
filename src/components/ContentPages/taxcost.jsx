import React from "react";
import { Container } from "react-bootstrap";
function taxcost() {
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
              <h2 className="name">Tax Closing Costs</h2>
            </div>
          </div>
        </Container>
        <Container fluid style={{ width: "90%" }}>
          <h4 className=" mt-5 headline">Property Taxes</h4>
          <p className="para ml-5 ">
            This is the one closing cost that is often prorated between the buyer and seller. If the seller has already
            paid the annual property taxes, the buyer typically reimburses the seller for the period in which the buyer
            will be occupying the property. Likewise, if the taxes have not yet been paid, the seller typically
            reimburses the buyer for the period in which the seller occupied the property.
          </p>
          <h4 className=" ml-5 headline">Transfer Taxes and Recording Fees</h4>
          <p className="para ml-5">
            This is the cost for transferring ownership of the property and recording the purchase documents. The fee is
            often calculated as a percentage of the sales price.
          </p>
          <p className="pt-3 mb-5 headline">
            <b>
              Have questions about the loan process? Call Vijay at <a href="309-750-1082">309-750-1082</a> . We answer
              questions about the loan process every day.
            </b>
          </p>{" "}
        </Container>
      </div>
    </div>
  );
}

export default taxcost;
