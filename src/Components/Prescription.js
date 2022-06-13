import React from 'react'
import "../Components/prescription.css"


function Prescription({pname,page,details,notes,gender}) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`; 
    return (
        <div className="container">
            <div className="header">
                <h1>Sunshine Hospitals</h1>
                <div className="qual">
                    <h5>Dr.John Killer</h5>
                    <p>M.B.B.S,MS(Ortho)</p>
                </div>
                <p>751 Victoria Street,South Statue 204</p>
                <p>PH:(207) 808 2014 2014</p>
            </div>

            <hr className="line"/>

            <div className="details">
                <div className="rowone">
                    <p>S.NO : ___________  </p>
                </div>
                <div className="rowtwo">
                    <p>Patient Name: <b><u>{pname}</u></b></p>
                    <p>Age: <b><u>{page}</u></b></p>
                    <p>Gender: <b><u>{gender}</u></b></p>
                </div>
                <div className="rowtwo">
                    <p>Address: <b><u>751 Victoria Street,South Statue 204</u></b></p>
                    <p>Date:  <b><u>{date}</u></b></p>
                </div>
                <div className="row3">
                    <div className="notes">
                        <i className="fa-solid fa-prescription fa-2xl"></i>
                        <br></br>
                        <br></br>
                        <h5>Details and Notes:</h5>
                        <b><u>{details}</u></b>
                        <br></br>
                        <b><u>{notes}</u></b>
                    </div>
                    <hr className="line"/>
                    <div className="footer">
                        <p>Signature:_______________________</p>
                        <p>johnkiller@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prescription
