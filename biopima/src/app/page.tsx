import ConsultantFlow from "./pages/consultant";
import ForgotPasswordFlow from "./pages/forgot-password";
import BioPimaFeatures from "./pages/features";
import LandingPage from "./pages/homepage";
import BioPimaDeveloperDocs from "./pages/how-it-works";
import CodeStructure from "./pages/code-structure";
import DeploymentProcess from "./pages/deployment";
import QAProcess from "./pages/process";
import CodeStandards from "./pages/standards";
import InstitutionFlow from "./pages/institution";
import Footer from "./pages/footer";
import Setup from "./pages/setup";
 
export default function Home() {
  return (
    <div >
      <LandingPage/>
      <ConsultantFlow/>
     <InstitutionFlow/>
       <ForgotPasswordFlow/>
       <BioPimaFeatures/>
       <CodeStructure/>
       <DeploymentProcess/>
       <QAProcess/>
       <CodeStandards/>
       <BioPimaDeveloperDocs/>
       <Setup/>
       <Footer/>

    </div>
  );
}
