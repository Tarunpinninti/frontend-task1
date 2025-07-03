import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Basic check
    if (email && password) {
      navigate('/home');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-purple-600 text-center mb-6">Login Page</h2>

        <label className="block mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full mb-4 px-4 py-2 border rounded-md"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full mb-6 px-4 py-2 border rounded-md"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
