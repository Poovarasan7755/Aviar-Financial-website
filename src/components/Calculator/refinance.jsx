import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../comman/footer";
function Refinance() {
  return (
    <div>
    <Container fluid >
      <div
        className="color mt-5"
        style={{
          backgroundImage: `url("https://asset-service-bucket-prod.s3.amazonaws.com/f0544e8f-5a69-480f-b1de-156918163c82")`,
        }}
      >
        <div className="overlay-text-text">
          {" "}
          <div className="page-name">
            <h2>REFINANCE BREAK-EVEN POINT CALCULATOR</h2>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default Refinance;
