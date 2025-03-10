import React, { useState } from "react";
import axios from "axios"; 
import { toast } from 'react-toastify';


const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return alert("Confirm password is not match kub");
    }

    try {
      const res = await axios.post("http://localhost:5001/api/register", form);
      
      console.log(res.data)
      console.log("Register Success:", res.data)
      toast.success(res.data)
    } catch (err) {
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
      console.log("Register Error:", err);
    }
  };

  return (
    <div>
      Register
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="border" onChange={handleOnChange} name="email" type="email" />

        <label>Password</label>
        <input className="border" onChange={handleOnChange} name="password" type="password" />

        <label>Confirm Password</label>
        <input className="border" onChange={handleOnChange} name="confirmPassword" type="password" />

        <button type="submit" className="bg-blue-500 rounded-md">Register</button>
      </form>
    </div>
  );
};

export default Register;
