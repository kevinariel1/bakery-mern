import React from 'react';
import AuthLayout from '../../components/layouts/AuthLayout.jsx';

const Login = () => {
  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Your warm pastries are waiting."
    >
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wide">Email Address</label>
          <input 
            type="email" 
            placeholder="chef@cloudbakery.com"
            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:border-[#FFB246] focus:ring-0 outline-none transition-all placeholder:text-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#5D4037] mb-2 uppercase tracking-wide">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-5 py-4 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:border-[#FFB246] focus:ring-0 outline-none transition-all placeholder:text-gray-300"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-gray-500 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-[#C2893A] focus:ring-[#C2893A] mr-2" />
            Keep me logged in
          </label>
          <a href="#" className="text-[#C2893A] font-bold hover:underline">Forgot?</a>
        </div>

        <button className="w-full bg-[#C2893A] hover:bg-[#A67531] text-white font-black py-4 rounded-2xl shadow-xl shadow-orange-200 transition-all active:scale-[0.98] mt-4 uppercase tracking-widest">
          Login to Bakery
        </button>

        <p className="mt-8 text-center text-gray-500">
          First time here? 
          <a href="/register" className="ml-2 text-[#C2893A] font-black hover:underline underline-offset-4">Join the Batch</a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;