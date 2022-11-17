import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import "../Calculator/calculator.scss"
import {Link} from "react-router-dom"
import Footer from '../../comman/footer'

function Calculator() {
  return (
    <Container fluid>
        
        <div
        className="color mt-5"
        style={{
          backgroundImage: `url("https://asset-service-bucket-prod.s3.amazonaws.com/f0544e8f-5a69-480f-b1de-156918163c82")`,
          
        }}
      >
        <div className="overlay-text-text">
          {" "}<div className='page-name'>
          <h2 >CALCULATORS</h2></div>
        </div>
        </div>
        <div className='heading_1'>
        <h5 style={{color:"#2ea3f2"}}>FIND OUT HOW MUCH YOU CAN AFFORD</h5>
        <p className='para_1'>The following online calculators serve as helpful tools during the mortgage process.</p>
        </div>
        <Container fluid style={{width:"95%"}}>
        <Row className='calculator-option'>
            <Col>
            <div>
            <img className='rounded mx-auto d-block ' src="https://asset-service-bucket-prod.s3.amazonaws.com/70b27a62-8a3d-4460-977f-ae68b4d6874e"/></div>
            <div className='content'>
              <Link className='calculators' to={{pathname:"/armorization"}} >
            <h6 className='text-center calcContents' style={{color:"#0051ff"}}>Payment / Amortization Calculator</h6></Link>
            <p className='text-center calcContents'>Calculate your monthly payment and see how the principal is paid over time.</p>
            </div>
            </Col>
            <Col>
            <div>
            <img className='rounded mx-auto d-block 'src="https://asset-service-bucket-prod.s3.amazonaws.com/defd919d-39f9-494f-a0ce-33f69496b5e5" /></div>
            <div className='content'>
            <Link className='calculators' to={{pathname:"/rentvsown"}} >
            <h6 className='text-center calcContents' style={{color:"#0051ff",padding:"5px"}}>Rent vs Own Calculator</h6></Link>
            <p className='text-center calcContents'>Calculate the difference between renting and buying a home..</p>
            </div>
            </Col>
            <Col>
            <img className='rounded mx-auto d-block ' src= "https://asset-service-bucket-prod.s3.amazonaws.com/590dc544-7c74-4710-9670-939825469780"/>
            <div className='content'>
            <Link className='calculators' to={{pathname:"/annualpercentage"}} >
            <h6 className='text-center calcContents' style={{color:"#0051ff"}}>Annual Percentage Rate Calculator</h6></Link>
            <p className='text-center calcContents'>Calculate the APR for fixed-rate or adjustable-rate loans.</p>
            </div>
            </Col>
            <Col>
            <img className='rounded mx-auto d-block '  src="https://asset-service-bucket-prod.s3.amazonaws.com/48d629c5-00f4-4367-9cd5-93bc825a871f"/>
            <div className='content'>
            <Link className='calculators calcContents' to={{pathname:"/debtconsolidation"}} >
            <h6 className='text-center calcContents' style={{color:"#0051ff"}}>Debt Consolidation Calculator</h6></Link>
            <p className='text-center calcContents'>Determine if you can consolidate your debt by combining it with your home mortgage.</p>
            </div>
            </Col>
        </Row>
        <Row className='calculator-option'>
            <Col>
            <div>
            <img className='rounded mx-auto d-block ' src="	https://asset-service-bucket-prod.s3.amazonaws.com/98a832e2-ab2b-46b3-a688-a383c87b1185" /></div>
            <div className='content'>
            <Link className='calculators' to={{pathname:"/prepaymentsavings"}} >
            <h6 className='text-center calcContents' style={{color:"#0051ff"}}>Prepayment Savings Calculator</h6></Link>
            <p className='text-center calcContents'>Find out how soon you can pay off your mortgage by making a prepayment.</p>
            </div>
            </Col>
            <Col>
            <img className='rounded mx-auto d-block ' src="https://asset-service-bucket-prod.s3.amazonaws.com/8b1f7077-5677-4085-bf1c-881e548b6b32" />
            <div className='content'>
            <Link className='calculators' to={{pathname:"/earlypayoff"}} >
            <h6 className='text-center calcContents'style={{color:"#0051ff"}}>Early Payoff Calculator</h6></Link>
            <p className='text-center calcContents'>Determine the additional monthly payment amount needed to pay off the loan sooner.</p>
            </div>
            </Col>
            <Col>
            <img className='rounded mx-auto d-block ' src="https://asset-service-bucket-prod.s3.amazonaws.com/0ea9d382-1f5c-4038-8445-fe069eb6091a"/>
            <div className='content'>
            <Link className='calculators' to={{pathname:"/refinance"}} >
            <h5 className='text-center calcContents' style={{color:"#0051ff"}}>Refinance Break-Even Point Calculator</h5></Link>
            <p className='text-center calcContents'>Find out how long it will take to "break-even" on a refinanced loan.</p>
            </div>
            </Col>
            <Col>
            <img className='rounded mx-auto d-block ' src="	https://asset-service-bucket-prod.s3.amazonaws.com/e1f15389-f424-4e4c-8da0-8c890640e6f2"/>
            <div className='content'>
            <Link className='calculators' to={{pathname:"/taxsaving"}} >
            <h5 className='text-center calcContents' style={{color:"#0051ff"}}>Tax Savings Calculator</h5></Link>
            <p className='text-center calcContents'>Determine the estimated tax savings with a new loan..</p>
            </div>
            </Col>
        </Row>
        </Container>
        <Footer/>
    </Container>
  )
}

export default Calculator