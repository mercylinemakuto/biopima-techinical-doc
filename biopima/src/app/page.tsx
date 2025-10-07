
import BioPimaFeatures from "./pages/features";
import LandingPage from "./pages/homepage";
// import BioPimaDeveloperDocs from "./pages/how-it-works";
// import CodeStructure from "./pages/code-structure";
import QAProcess from "./pages/process";
// import CodeStandards from "./pages/standards";
import Footer from "./pages/footer";
import Setup from "./pages/setup";
import Frontend from "./pages/frontend";
import Backend from "./pages/backend";
 
export default function Home() {
  return (
    <div >
      <LandingPage/>
       <Setup/>
       <BioPimaFeatures/>
       <Frontend/>
       <Backend/>
       {/* <BioPimaDeveloperDocs/> */}
       {/* <CodeStructure/> */}
       <QAProcess/>
       {/* <CodeStandards/> */}
       
      
       <Footer/>

    </div>
  );
}
