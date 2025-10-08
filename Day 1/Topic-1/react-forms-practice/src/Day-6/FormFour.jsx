import { useState } from "react";

function FormFour(){
  const [country,setCountry]=useState("");
  const [gender,setGender]=useState("");
  const [termsAccepted,setTermsAccepted]=useState(false);
  const [submittedData,setSubmittedData]=useState(null);

  function handleSubmit(e){
    e.preventDefault();

    if(!country || !gender || !termsAccepted)
    {
      alert("Please fill all the fields and accept the terms");
      return;
    }

    setSubmittedData({country,gender,termsAccepted});

  }

  return(

    <div>
      <h2>Assignment 4: Select, Radio & Checkbox Inputs</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Country: </label>
          <select
            value = {country}
            onChange={(e)=>setCountry(e.target.value)}
          >
          <option value={""}>------Select Country------</option>
          <option value={"India"}>India</option>
          <option value={"USA"}>USA</option>
          <option value={"Australia"}>Australia</option>
          <option value={"Canada"}>Canada</option>
          </select>
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input type="radio"
            name="gender"
            value="Male"
            checked={gender==="Male"}
            onChange={(e)=>setGender(e.target.value)}/>{""}Male
          </label>

          <label>
            <input type="radio"
            name="gender"
            value="Female"
            checked={gender==="Female"}
            onChange={(e)=>setGender(e.target.value)}
            />{""}Female
          </label>
        </div>

        <div>
          <label>
            <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e)=>setTermsAccepted(e.target.checked)}/>{""}I accept the Terms & Conditions
          </label>
        </div>

        <button type="submit">Submit</button>

      </form>

      <hr/>
      {submittedData && (
        <div>
          <h3>✅ Submitted Data:</h3>
          <p><strong>Country:</strong> {submittedData.country}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p>
            <strong>Accepted Terms:</strong>{" "}
            {submittedData.termsAccepted ? "Yes" : "No"}
          </p>
        </div>

      )}

    </div>
  );

}
export default FormFour;