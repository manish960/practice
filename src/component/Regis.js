import React, { useEffect, useState } from "react";
import Axios from 'axios';

let formElements = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Password", key: "password" },
  { label: "Confirm password", key: "confirmpassword" },
]



const Regi = () => {
  const [formData, setFormData] = useState({});
  const [jsonData, setjsonData] = useState();

  const handleChange = (value, key) => {
    setFormData({ ...formData, ...{ [key]: value } });
  };
  const submit = (e) => {
    e.preventDefault();
     
    console.log(formData);
    setjsonData(formData);

    const apiData=async ()=>{
        let res=await Axios.post('http://api.collabzilla.com/api/central/users/register',{
        Headers:{'accept':}    
        ...formData})
       console.log(res)
    }

    apiData();

    
  };


  return (
    <>
      <div>Register</div>
      <form>
        {formElements.map(formElement => {
          return (
            <div>
              {formElement.label}
              <input
                value={formData[formElement.key]}
                onChange={(e) => {
                  handleChange(e.target.value, formElement.key);
                  console.log(e.target.value);
                }}
              ></input>
            </div>
          );
        })}
        <button onClick={submit}>click</button>
      </form>
    </>
  );
};

export default Regi;