import React from "react";
import "../Components/form.css";
import { useEffect,useState} from "react";
import {Link} from 'react-router-dom'
import Prescription from "./Prescription";
export default function Form() {
  const [pname, setPname] = useState("");
  const [page, setPage] = useState("");
  const [gender, setGender] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState("");
  const [date,setDate]=useState();
  const [flag,setFlag]=useState(1);
  useEffect(() => {
    document.querySelector("#today").valueAsDate = new Date();
  },[]);
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(flag==0)
    {
      setFlag(1)
    }
    else{
      setFlag(0);
    }
  }
  if(flag){
  return (
    <div className="">
      <div className="navbar">
        <h3>Prescription Form</h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div class="form-group row">
          <label for="pname" class="col-sm-2 col-form-label">
            Patient Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="pname"
              name="pname"
              placeholder="Patient Name"
              onChange={(e) => setPname(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="page" class="col-sm-2 col-form-label">
            Patient Age
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="page"
              name="page"
              placeholder="Patient Age"
              onChange={(e) => setPage(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="pgender" class="col-sm-2 col-form-label">
            Patient Gender
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="pgender"
              placeholder="Gender"
              name="pgender"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="today" class="col-sm-2 col-form-label">
            Date
          </label>
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control"
              id="today"
              placeholder=""
              name="today"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="notes" class="col-sm-2 col-form-label">
            Notes
          </label>
          <div class="col-sm-10">
            <textarea
              rows="4"
              cols="68"
              id="notes"
              className="textarea"
              class="form-control"
              name="notes"
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label for="details" class="col-sm-2 col-form-label">
            Details of Medicine
          </label>
          <div class="col-sm-10">
            <textarea
              rows="4"
              cols="68"
              id="details"
              className="textarea"
              class="form-control"
              name="details"
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="submit">
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  }
  return <Prescription pname={pname} page={page} details={details} notes={notes} gender={gender} date={date}></Prescription>
}
