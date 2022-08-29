import React from 'react';
import "./Login.css";
import { useState } from 'react';

const Login = (props) => {
  const {label,errorMessage, onChange, id, ...inputprops}= props;
  const [focused, setFocused]= useState(false);

  const handleFocused= (e) =>{
  setFocused(true)
  }



  return (
  <div className='form-Input'>
  <label>{label}</label>
  <input {...inputprops} 
  onChange={onChange} 
  onBlur={handleFocused} 
  onFocus={()=>
inputprops.name === "confirmPassword" && setFocused(true)
  }
  focused={focused.toString()}
  />
  <span>{errorMessage}</span>
  </div>
  )
}

export default Login
