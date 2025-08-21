import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "../../AdminAuthContext/AdminAuthContext";

const Login = ({ onLogin }) => {
   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/adminlogin", {
        username,
        password,
      });

      if (res.data.status === 202) {
        login(res.data.data);
        navigate("/adminhome");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300 m-3">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm d-flex justify-content-center align-middle">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded w-50">

        <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 m-2">
          <div className="m-2">
            <label className="block text-sm mb-1">Email</label><br />   
            <input
              type="email"
              className="form-control"
              placeholder="admin@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="m-2">
            <label className="block text-sm mb-1">Password</label><br />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

         <div className="d-flex justify-content-center">
             <button
            type="submit"
            className="form-control bg-info-subtle mt-4 p-2"
          >
            Login
          </button>
         </div>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Admin Panel. All rights reserved.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
