import React from "react";
import { Container, Row } from "react-bootstrap";

function Insurancecosts() {
  return (
    <div>
      <Container fluid>
        <div
          className="color mt-5"
          style={{
            backgroundImage: `url("https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/e94234e5-2e7f-405e-a296-7d28a6fdd2b7")`,
          }}
        >
          <div className="overlay-effect ">
            {" "}
            <h3 style={{ color: "whitesmoke" }} className="name">
              Homeowners Insurance
            </h3>
          </div>
        </div>
      </Container>
      <Container fluid style={{ width: "90%" }}>
        <h5 className="headline head  mt-4">Homeowner's Insurance</h5>
        <p className="para">
          This insurance covers replacement costs for damages caused by fire, wind or other disaster that might affect
          the value of the property. Typically, the insurance also includes personal liability and theft coverage.
        </p>
        <h5 className="headline para">Flood or Quake Insurance</h5>
        <p className="para">
          Additional hazard insurance coverage that is required for homes located in a designated hazard zone as
          established by the Federal Emergency Management Agency (FEMA). As we tour houses, I will let you know if the
          property resides in a hazard zone.
        </p>
        <h5 className="headline head">Private Mortgage Insurance (PMI)</h5>
        <p className="para">
          Insurance required for conventional mortgage loans when the borrower's down payment on the house is less than
          20 percent of the loan value.
        </p>
        <h5 className="headline head">Title Insurance</h5>
        <p className="para">
          This policy protects both the buyer and lender by insuring a clear chain of title. (In other words, it insures
          that that the person who sells the house has the legal right to do so.)
        </p>
        <p className="mb-5 mt-5">
          <b>
            Have questions about the loan process? Call Vijay at <a href="309-750-1082">309-750-1082</a> We answer
            questions about the loan process every day.
          </b>
        </p>
      </Container>
    </div>
  );
}

export default Insurancecosts;
