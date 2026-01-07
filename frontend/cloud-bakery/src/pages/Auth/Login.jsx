import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout.jsx';
import { useNavigate, Link } from 'react-router-dom';
import Inputs from '../../components/inputs/Inputs.jsx';
import { validateEmail } from '../../utils/helper.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setError("");
    console.log("Login Attempt:", { email, password });
  };

  return (
    <AuthLayout title="Welcome Back" subtitle="Your warm pastries are waiting.">
      {/* SINGLE FORM WRAPPER */}
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wide">Email Address</label>
          <Inputs
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Fixed variable name
            type="email"
            placeholder="name@gmail.com"
            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:border-[#FFB246] focus:ring-0 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wide">Password</label>
          <Inputs
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Fixed variable name
            type="password"
            placeholder="Min. 8 characters"
            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:border-[#FFB246] focus:ring-0 outline-none transition-all"
          />
        </div>

        {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-gray-500 cursor-pointer">
            <input type="checkbox" className="mr-2" /> Keep me logged in
          </label>
          <a href="#" className="text-[#C2893A] font-bold hover:underline">Forgot?</a>
        </div>

        <button type="submit" className="w-full bg-[#C2893A] text-white font-black py-4 rounded-2xl shadow-xl hover:bg-[#A67531] transition-all uppercase">
          Login to Bakery
        </button>

        <p className="mt-8 text-center text-gray-500">
          First time here?
          <Link to="/register" className="ml-2 text-[#C2893A] font-black hover:underline">Join the Batch</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;