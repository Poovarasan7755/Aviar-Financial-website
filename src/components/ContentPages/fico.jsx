import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../comman/footer";

function Fico() {
  const navigate = useNavigate();

  return (
    <div >
      <Container fluid>
        <div
          className="color mt-5"
          style={{
            backgroundImage: `url("https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/61ba994e-23d4-485c-b85e-f0eb74eb72c3")`,
          }}
        >
          <div className="overlay-effect">
            {" "}
            <h4 className="name">FICO Credit Score</h4>
          </div>
        </div>
      </Container>
      <Container fluid style={{width:"90%"}}>
        <h5 className="heading mt-5" style={{ color: "rgb(0 155 223)" }}>
          About the FICO Credit Score
        </h5>
        <p className="para">
          {" "}
          Since we live in an automated society, it should come as no surprise that your ability to repay your mortgage
          comes down to a single number. The FICO score is created by credit reporting agencies. They use the payment
          history from all of your loans: credit cards, mortgages, car/boat loans and others.
        </p>
        <p className="para">
          TransUnion, Equifax, and Experian, the three major credit agencies, each have a proprietary formula for
          building your credit score. The original FICO score was developed by Fair Isaac and Company. Experian uses
          this model and calls its score FICO. Equifax's model, based on FICO, is called BEACON, while TransUnion, which
          also uses a slightly modified FICO, calls its score EMPIRICA. While each of the models considers a range of
          data available in your credit report, the differences aren't huge; all of the agencies use the following
          factors in building a credit score:
          <ul>
            <li>Credit History - How many years have you had credit?</li>
            <li>Late Payments - Do you pay your bills on time?</li>
            <li>Balances on your Credit Cards - How many accounts? How much do you owe on your accounts?</li>
            <li>Requests for Credit - How many times have you had your credit checked for a loan?</li>
          </ul>
        </p>
        <p className="para">
          These factors are weighted slightly differently depending on which formula the agency uses. The result is a
          single number: your FICO score. Credit scores range from 300 to 800. Higher is better. Most borrowers who want
          to get a mortgage loan these days score 620 or above.
        </p>
        <h5 className="head" style={{ color: "rgb(0 155 223)" }}>
          Your credit score greatly affects how much you pay in interest every month
        </h5>
        <p className="para">
          Did you know? FICO scores are used for more than just determining whether or not you qualify for a mortgage.
          Lenders give lower interest rates to individuals with higher scores.
        </p>
        <h5 className="head" style={{ color: "rgb(0 155 223)" }}>
          Raising your FICO score
        </h5>
        <p className="para">
          Unfortunately, there isn't a lot you can do to immediately improve your credit score. Some companies promise
          quick fixes, but they can't do anything different than what you can do — for free. You must, of course, remove
          any incorrect reporting from your credit report; this is the only way to quickly improve your credit score.
        </p>
        <h5 className="head" style={{ color: "rgb(0 155 223)" }}>
          Know your FICO
        </h5>
        <p className="para">
          Before you can improve your FICO score, you have to know your score and make certain that the reports from
          each agency are correct. Fair Isaac has created a web site ( <a href="www.myFICO.com">www.myFICO.com</a>) that
          lets you do just that. It's inexpensive, fast, and easy to get your credit score as well as credit reports
          from all three credit reporting agencies. They also provide helpful information and tools that can help you
          analyze what actions might have the greatest impact on your FICO score.
        </p>
        <p className="para">
          You can get a free credit report once a year from all three credit reporting agencies when you visit
          AnnualCreditReport.com. You won't get a free credit score from{" "}
          <a href="AnnualCreditReport.com">AnnualCreditReport.com</a> , but getting one is fast and inexpensive.
        </p>
        <p className="para">
          Armed with this info, you will be a more informed consumer and you'll be better positioned to obtain the most
          favorable mortgage.
        </p>
        <p className="pt-3">
          Have questions about the loan process? Call Vijay at <a className="contact" href="309-750-1082">309-750-1082</a>. We answer questions about the loan process
          every day.
        </p>
        <div className="homepage-button mt-5 mb-5">
          <Button className="px-4 py-2 homepage-btn" onClick={() => navigate("/step-1")}>
            {" "}
            Apply Now
          </Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Fico;
