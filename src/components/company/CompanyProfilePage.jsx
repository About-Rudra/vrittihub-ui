import React from "react";
import Header from "../general/Header";
import CompanyDetailsProfileProps from "./CompanyDetailsProps";
import CompanyDetailsEntry from "../company/CompanyDetailsEntry";
import { Routes, Route, useNavigate } from 'react-router-dom';
import CompanyNewInternship from "./CompanyNewInternship";

function renderEntry(detail){
    return(
        <CompanyDetailsProfileProps 
            key={detail.id}
            companyName={detail.companyName}
            qualificationRequired={detail.qualificationRequired}
            contactNumber={detail.contactNumber}
            positionName={detail.positionName}
            skillsRequired={detail.skillsRequired}
            jd={detail.jd}
            emailid={detail.emailid}
            location={detail.location}
            Domain={detail.dom}
        />
    ) 
}

function CompanyProfilePage() {
    const navigate = useNavigate();

    function navigateToCompanyNewInternship(){
        navigate('/companynewinternship')
    }

  return (
    <div>
    <Header />
        <div id="CDPContainer">
        
        <div class="CDP">
            <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" />
        </div>
        <div class="CDP">
            <div class="ProfileButtons">
                <button type="button" class="btn btn-primary" id="InviteButton" data-toggle="modal" data-target="#exampleModalLong"> My Invites</button>
                <button type="button" class="btn btn-primary" id="RequestButton">My Requests</button>
            </div>
            
            <div class="profileText">
            {CompanyDetailsEntry.map(renderEntry)}
            </div>

            <button type="submit" class="btn btn-primary" id="submitButton" >Edit</button>
            <button type="submit" class="btn btn-primary" id="PostNewButton" onClick={navigateToCompanyNewInternship}>Post New Internship</button>
        </div>
         
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <Routes>
                <Route path="/companynewinternship" element={<CompanyNewInternship />} />
            </Routes>
    </div>
  );
}

export default CompanyProfilePage;