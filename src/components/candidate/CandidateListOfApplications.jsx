import React, { useState, useEffect } from "react";
import Header1 from "../general/Header1";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import CompanyDetailsPage from "../company/CompanyDetailsPage";

function CandidateListOfApplications(){
    const email = Cookies.get('email');
    console.log("Retrieved email as: " + email);

    const [studentApplicationDetails, setStudentApplicationDetails] = useState([]);

    useEffect(() => {
        // Fetch student details from the API
        //join internship_post table for viewing the company details aswell
        fetch(`http://localhost:5000/internship-application/candidate/${email}`)//url to get internship applied buy the student
            .then(response => response.json())
            .then(data => {
                // Assign the fetched data to the studentapplicationDetails variable
                setStudentApplicationDetails(data);
                console.log(studentApplicationDetails)
            })
            .catch(error => console.error('Error fetching student details:', error));
    }, []); // Empty dependency array to fetch data only once when the component mounts
    const navigate = useNavigate();
    const navigateToCompanyDetailsPage = (studentApplicationDetails) => {
        navigate('/companydetailsview', { state: { studentApplicationDetails } });
    }
    return(
<div>
<Header1 />
            
            <h1 id="Exploreh1">My Applications</h1>
            <div id="ExploreContainer">
                {studentApplicationDetails.map(studentApplicationDetails =>
                
                    <div key={studentApplicationDetails.email} className="studentDetailsContainer">
                    

                        <div id="ExploreImage">
                        {!studentApplicationDetails.profile_photo && <img src="https://imgs.search.brave.com/7c7uWwnjKKj5dXEQbj9HxKJqJrNIVoz7XJFbLmPVJyA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcGZw/LXBpY3R1cmVzLWNx/anMzb3N2ZGxqdGho/NTMuanBn" height="80%" width="100%" alt="" />}
                        {studentApplicationDetails.profile_photo && <img src={'http://localhost:5000/uploads/' +  studentApplicationDetails.profile_photo} height="80%" width="100%" alt=""/>}

                            {/* //in this button pass on student details than company details */}
                            
                            <button type="button" class="btn btn-info" id="DetailsButton" onClick={() => navigateToCompanyDetailsPage(studentApplicationDetails)}>Details</button>
                        </div>
                        <div id="ExploreContent">

                        {/* change to company details rather than student from internship_post */}
                            <h2>{studentApplicationDetails.student_name}</h2>
                            <h4>{studentApplicationDetails.qualification}</h4>
                            <h6>{studentApplicationDetails.contact_no}</h6>
                            {/* {company.contact_no}  {company.qualification_required}  {company.skills_required} 
                            {company.email}  {company.locations}  {company.interested_domain} */}

                        </div>
                       
                    </div>
                    
                )}
            </div>
            <Routes>
                <Route path="/companydetailsview" element={<CompanyDetailsPage />} />
            </Routes>
        
        
    </div>
    )
    
}
export default CandidateListOfApplications;