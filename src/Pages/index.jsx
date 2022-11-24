import { lazy } from "react";

const Homepage = lazy(() => import("../components/Homepage"));
const Login = lazy(() => import("../components/login"));
const Username = lazy(() => import("../components/usernameforgot"));
const Password = lazy(() => import("../components/passwordforgot"));
const Signup = lazy(() => import("../components/Signup/signup"));
const Application = lazy(() => import("../components/application"));
const HeaderNavbar = lazy(() => import("../container/headerNavbar"));
const Loanprocess = lazy(() => import("../components/ContentPages/loanprocess"));
const Credit = lazy(() => import("../components/ContentPages/credit"));
const Broker = lazy(() => import("../components/ContentPages/brokevsloan"));
const Ficocredit = lazy(() => import("../components/ContentPages/fico"));
const Gettingqualified = lazy(() => import("../components/ContentPages/qualified"));
const Downpayment = lazy(() => import("../components/ContentPages/downpayment"));
const Closingcost = lazy(() => import("../components/ContentPages/closingcost"));
const Loancost = lazy(() => import("../components/ContentPages/loancost"));
const Insurancecosts = lazy(() => import("../components/ContentPages/insurancecosts"));
const Taxclosingcost = lazy(() => import("../components/ContentPages/taxcost"));
const Calculator = lazy(() => import("../components/Calculator/calculator"));
const Annualpercentage = lazy(() => import("../components/Calculator/annualpercentage"));
const Armorization = lazy(() => import("../components/Calculator/armorization"));
const Earlypayoff = lazy(() => import("../components/Calculator/earlypayoff"));
const Prepaymentsavings = lazy(() => import("../components/Calculator/prepaymentsavings"));
const Refinance = lazy(() => import("../components/Calculator/refinance"));
const Rentvsown = lazy(() => import("../components/Calculator/rentvsown"));
const Debtconsolidation = lazy(() => import("../components/Calculator/debtconsolidation"));
const Taxsaving = lazy(() => import("../components/Calculator/taxsaving"));
const Footer = lazy(() => import("../Form"));
const ContactUs = lazy(() => import("../components/ContactUs"));
const Index = lazy(() => import("../components/application"));
const AssetPageOne = lazy(() => import("../Form/Assets/StepOne"));
const Employement = lazy(() => import("../Form/Employement-and-income/StepOne"));
const Liabilities = lazy(() => import("../Form/Liabilities/Liability"));
const Declaration = lazy(() => import("../Form/Declaration/declaration"));
const Declarationpage = lazy(() => import("../Form/Declaration/declarationpage"));
const Summary = lazy(() => import("../Form/Summery/Summary"));
const Resetpassword = lazy(() => import("../components/resetpassword"));
const Privacypolicy = lazy(() => import("../components/privacypolicy"));
const Companystatelicences = lazy(() => import("../components/companystatelicences"));
const IndexPage = lazy(() => import("../components"));
const Sidebar = lazy(() => import("../container/Sidebar"));
const StepOne = lazy(() => import("../Form/LoanDetails/StepOne"));
const StepThree = lazy(() => import("../Form/Personal Information/StepThree"));
const StepTwo = lazy(() => import("../Form/LoanDetails/StepTwo"));
const StepFour = lazy(() => import("../Form/Personal Information/StepFour"));
const StepFive = lazy(() => import("../Form/Personal Information/StepFive"));
const Html = lazy(() => import("../components/ButtonsComponent/html"));
const HomeLoanBasics = lazy(() => import("../components/ContentPages/homeLoanBasics"));

export {
  Homepage,
  Login,
  Username,
  Password,
  Signup,
  Application,
  HeaderNavbar,
  Loanprocess,
  Credit,
  Broker,
  Ficocredit,
  Gettingqualified,
  Downpayment,
  Closingcost,
  Loancost,
  Insurancecosts,
  Taxclosingcost,
  Calculator,
  Annualpercentage,
  Armorization,
  Earlypayoff,
  Prepaymentsavings,
  Refinance,
  Rentvsown,
  Debtconsolidation,
  Taxsaving,
  Footer,
  ContactUs,
  Index,
  AssetPageOne,
  Employement,
  Liabilities,
  Declaration,
  Declarationpage,
  Summary,
  Resetpassword,
  Privacypolicy,
  Companystatelicences,
  IndexPage,
  Sidebar,
  StepOne,
  StepThree,
  StepTwo,
  StepFour,
  StepFive,
  Html,
  HomeLoanBasics,
};
