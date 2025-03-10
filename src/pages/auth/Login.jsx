import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import useEcomStore from "../../store/ecom-store";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // แก้ให้ถูกต้อง
  const actionLogin = useEcomStore((state) => state.actionLogin);
  const user = useEcomStore((state) => state.user);
  console.log('user from zustand', user);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await actionLogin(form);
      const role = res.data.payload.role;
      console.log('role:', role);
      roleRedirect(role);
      toast.success('Welcome Back');
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.message || "Login failed";
      toast.error(errMsg);
    }
  };

  const roleRedirect = (role) => {
    if (role === 'admin') {
      navigate('/admin'); // ใช้ navigate แทน Navigate
    } else {
      navigate('/user');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="border" onChange={handleOnChange} name="email" type="email" required />

        <label>Password</label>
        <input className="border" onChange={handleOnChange} name="password" type="password" required />

        <button type="submit" className="bg-blue-500 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
