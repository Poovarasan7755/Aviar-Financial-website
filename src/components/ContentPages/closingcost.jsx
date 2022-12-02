import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import images from "./images.jpg";

function Closingcost() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Container fluid>
          <Row>
            <div
              className="color mt-5"
              style={{
                backgroundImage: `url("https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/e94234e5-2e7f-405e-a296-7d28a6fdd2b7")`,
              }}
            >
              <div className="overlay-effect ">
                <h2 className="name">Closing Costs</h2>
              </div>
            </div>
            <h4 className="heading mt-5 mb-5  text-center headline">Don't Forget Closing Costs!</h4>
            <Row>
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <div className="w-100">
                  <img src={images} className="image w-100" />
                </div>
              </Col>

              <Col md={6} className="mb-3 mt-3">
                <p className="para">
                  Every home sale involves costs. Sellers and buyers customarily split these costs, as the real estate
                  sales contract specifies.
                </p>
                <p className="para">
                  Many of the costs associated with buying a home are associated with getting the mortgage loan. At Team
                  USA Mortgage, we are highly experienced in mortgage lending, so we can provide you with a
                  comprehensive report on mortgage-related closing costs in your "Loan Estimate".
                </p>
                <h4 className="head headline">
                  The Loan Estimate (Also known as the LE)
                </h4>
                <p className="para">
                  Very shortly after you submit your application, we will provide you with a "Loan Estimate" of your
                  closing costs. The closing cost estimate comes out of our past experience. It's important to note that
                  while our LEs are very accurate, we can't always predict your costs to the penny. We handle questions
                  about these costs every day at Aviar Financial Services, so don't hesitate to ask if we can help
                  answer your questions.
                </p>
                <p className="para">
                  We've provided a general list of these costs below, but we will provide you a specific list of closing
                  costs, with amounts, soon after you have completed your loan application. At Aviar Financial Services,
                  we don't believe in surprises, so if your costs change, we will be sure to let you know immediately.
                </p>
              </Col>
            </Row>

            <div className="homepage-button mt-5 mb-5">
              <Button className="px-4 py-2 homepage-btn" onClick={() => navigate("/forms/step-1")}>
                Apply Now
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Closingcost;
