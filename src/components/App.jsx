import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./general/Home";
import AboutUs from "./general/AboutUs";
import ForgotPass from "./general/ForgotPass";
import AreUA from "./general/AreUA";
import CompanySignup from "./company/CompanySignup";
import CandidateSignup from "./candidate/CandidateSignup";
import CompanyLogin from "./company/CompanyLogin";
import CandidateLogin from "./candidate/CandidateLogin";
import CompanyDetailsForm from "./company/CompanyDetailsForm";
import CandidateDetailsForm from "./candidate/CandidateDetailsForm";
import CompanyDetailsPage from "./company/CompanyDetailsPage";
import CandidateDetailsPage from "./candidate/CandidateDetailsPage";
import CompanyProfilePage from "./company/CompanyProfilePage";
import CandidateProfilePage from "./candidate/CandidateProfilePage";
import CompanyNewInternship from "./company/CompanyNewInternship";
import CandidateApplyForInternship from "./candidate/CandidateApplyForInternship";
import CandidateListOfApplications from "./candidate/CandidateListOfApplications";
import AreUALogin from "./general/AreUALogin";
import CompanyExplorePage from "./company/CompanyExplorePage";
import CandidateExplorePage from "./candidate/CandidateExplorePage";
import CompanyMyPostings from "./company/CompanyMyPostings";
import CompanyInternshipWhoApplied from "./company/CompanyInternshipWhoApplied";
// import EditCandidatePage from "./candidate/EditCandidateDetails";
import EditCandidateDetails from "./candidate/EditCandidateDetails";
import EditCompanyDetails from "./company/EditCompanyDetails";
import CandidateUploadPhoto from "./candidate/CandidateUploadPhoto";
import CompanyUploadPhoto from "./company/CompanyUploadPhoto";



// import { BrowserRouter as Router } from 'react-router-dom';

//import ReactDOM from "react-dom";

function App() {
  return (
    
    
    
    
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        <Route path="/areua" element={<AreUA />} />
        <Route path="/companysignup" element={<CompanySignup />} />
        <Route path="/candidatesignup" element={<CandidateSignup />} />
        <Route path="/companylogin" element={<CompanyLogin />} />
        <Route path="/candidatelogin" element={<CandidateLogin />} />
        <Route path="/companydetails" element={<CompanyDetailsForm />} />
        <Route path="/candidatedetails" element={<CandidateDetailsForm />} />
        <Route path="/companydetailsview" element={<CompanyDetailsPage />} />
        <Route path="/candidatedetailsview" element={<CandidateDetailsPage />} />
        <Route path="/companyprofilepage" element={<CompanyProfilePage />} />
        <Route path="/candidateprofilepage" element={<CandidateProfilePage />} />
        <Route path="/candidateapplyforinternship" element={<CandidateApplyForInternship />} />
        <Route path="/companynewinternship" element={<CompanyNewInternship/>} />
        <Route path="/candidatelistofapplications" element={<CandidateListOfApplications/>} />
        <Route path="/companymypostings/*" element={<CompanyMyPostings/>} />
        <Route path="/companyinternshipwhoapplied" element={<CompanyInternshipWhoApplied/>} />
        <Route path="/areualogin" element={<AreUALogin/>} />
        <Route path="/explorecompany" element={<CompanyExplorePage/>} />
        <Route path="/explorecandidate" element={<CandidateExplorePage/>} />
        <Route path="/editcandidatedetails" element={<EditCandidateDetails/>} />
        <Route path="/editcompanydetails" element={<EditCompanyDetails/>} />
        <Route path="/candidateuploadphoto" element={<CandidateUploadPhoto/>} />
        <Route path="/companyuploadphoto" element={<CompanyUploadPhoto/>} />
       

      </Routes>
    
    
     
    
    
  );
  
}

export default App;





