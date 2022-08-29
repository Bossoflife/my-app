import { useState } from 'react';
import './App.css';
import Login from './Components/Login';

function App() {
const [values, setValue] =useState ({
  username: "",
  email: "",
  birthday: "",
  password: "",
  confirmPassword: "",
});

const input = [
{
  id: 1,
  name: "username",
  type: "text",
  placeholder: "Username",
  errorMessage: "Username should be 3-16 characters and shouldn't include any special charater!",
  label: "Username",
  pattern: `^[A-Za-z0-9]{3,16}$`,
  required: true,
},
{
  id: 2,
  name: "email",
  type: "email",
  placeholder: "Email",
  errorMessage: "It should be valid email address!",
  label: "Email",
  required: true,
},
{
  id: 3,
  name: "birthday",
  type: "date",
  placeholder: "Birthday",
  label: "Birthday",
 
},

{
  id: 4,
  name: "password",
  type: "password",
  placeholder: "Password",
  errorMessage: "Password should be 8-20 charater and inculde at least 1 letter, 1 number, and 1 special charater! ",
  label: "Password",
  pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8-20}$`,
  required: true,
},
{
  id: 5,
  name: "confirmPassword",
  type: "password",
  placeholder: "Confirm Password",
  errorMessage: "Password dont't match!",
  label: "Confirm Password",
  pattern: values.password,
  required: true,
},
]

  const handleSubmit = (e) => {
    e.preventDefault();

  };
 

const onChange=(e)=>{
  setValue({...values,[e.target.name]:e.target.value})
}
console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
      {input.map((input)=>( 
       <Login key={input.id}
        {...input} 
        value={values[input.name]}
       onChange={onChange}/>) )}
       <button>Sumit</button>
      </form>
    </div>
  );
}

export default App;
