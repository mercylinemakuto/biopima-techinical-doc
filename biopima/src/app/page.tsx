
import BioPimaFeatures from "./pages/features";
import LandingPage from "./pages/homepage";
import QAProcess from "./pages/process";
import Footer from "./pages/footer";
import Setup from "./pages/setup";
import Frontend from "./pages/frontend";
import Backend from "./pages/backend";
 
export default function Home() {
  return (
    <div >
      <LandingPage/>
       <BioPimaFeatures/>
       <Setup/>
       <Frontend/>
       <Backend/>
       <QAProcess/> 
       <Footer/>

    </div>
  );
}
