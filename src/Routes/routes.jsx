import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { HashRouter, Route, Routes, Routes as Switch } from "react-router-dom";
import HeaderNavbar from "../container/headerNavbar";
import {
  Annualpercentage,
  Application,
  Armorization,
  AssetPageOne,
  Broker,
  Calculator,
  Closingcost,
  Companystatelicences,
  ContactUs,
  Credit,
  Debtconsolidation,
  Declaration,
  Declarationpage,
  Downpayment,
  Earlypayoff,
  Employement,
  Ficocredit,
  Footer,
  Gettingqualified,
  Homepage,
  Html,
  Index,
  IndexPage,
  Insurancecosts,
  Liabilities,
  Loancost,
  Loanprocess,
  Login,
  Password,
  Prepaymentsavings,
  Privacypolicy,
  Refinance,
  Rentvsown,
  Resetpassword,
  Sidebar,
  Signup,
  StepFive,
  StepFour,
  StepOne,
  StepThree,
  StepTwo,
  Summary,
  Taxclosingcost,
  Taxsaving,
  Username,
  HomeLoanBasics,
} from "../Pages";
import Foote from "../container/footer";

//  spinner or Loader
const fallbackLoader = (
  <div className="center">
    <Spinner animation="border" variant="primary" />
  </div>
);

export default function Routers() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={fallbackLoader}>
          <HeaderNavbar />
          <div style={{ marginTop: "105px" }}>
            <Routes>
              <Route exact path="/" element={<Html />} />
              <Route path="/home-page" element={<Homepage />} />
              <Route path="/application" element={<Application />} />
              <Route path="/loanprocess" element={<Loanprocess />} />
              <Route path="/credit" element={<Credit />} />
              <Route path="/brokevsloan" element={<Broker />} />
              <Route path="/fico" element={<Ficocredit />} />
              <Route path="/qualified" element={<Gettingqualified />} />
              <Route path="/downpayment" element={<Downpayment />} />
              <Route path="/closingcost" element={<Closingcost />} />
              <Route path="/taxcost" element={<Taxclosingcost />} />
              <Route path="/loancost" element={<Loancost />} />
              <Route path="/insurancecosts" element={<Insurancecosts />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/annualpercentage" element={<Annualpercentage />} />
              <Route path="/armorization" element={<Armorization />} />
              <Route path="/earlypayoff" element={<Earlypayoff />} />
              <Route path="/prepaymentsavings" element={<Prepaymentsavings />} />
              <Route path="/refinance" element={<Refinance />} />
              <Route path="/rentvsown" element={<Rentvsown />} />
              <Route path="/taxsaving" element={<Taxsaving />} />
              <Route path="/debtconsolidation" element={<Debtconsolidation />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/form" element={<Index />} />
              <Route path="/step-1" element={<StepOne />} />
              <Route path="/step-2" element={<StepTwo />} />
              <Route path="/step-3" element={<StepThree />} />
              <Route path="/step-4" element={<StepFour />} />
              <Route path="/step-5" element={<StepFive />} />
              <Route path="/asset" element={<AssetPageOne />} />
              <Route path="/employement-and-income-details" element={<Employement />} />
              <Route path="/liabilities" element={<Liabilities />} />
              <Route path="/declaration" element={<Declaration />} />
              <Route path="/declaration-page" element={<Declarationpage />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/index" element={<IndexPage />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/resetpassword" element={<Resetpassword />} />
              <Route path="/usernameforget" element={<Username />} />
              <Route path="/passwordforgot" element={<Password />} />
              <Route path="/privacypolicy" element={<Privacypolicy />} />
              <Route path="/companystatelicences" element={<Companystatelicences />} />
              <Route path="/homeloan/basics" element={<HomeLoanBasics />} />
            </Routes>
          </div>
          <Foote />
        </Suspense>
      </HashRouter>
    </>
  );
}
