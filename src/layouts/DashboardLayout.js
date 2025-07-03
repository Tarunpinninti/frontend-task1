import React from 'react';
import { Link } from 'react-router-dom';
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-6 space-y-4 hidden sm:block">
        <h2 className="text-xl font-bold text-purple-600 mb-6">My Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/home" className="text-gray-700 hover:text-purple-600">🏠 Home</Link>
          <Link to="/tasks" className="text-gray-700 hover:text-purple-600">✅ Tasks</Link>
          <Link to="/calendar" className="text-gray-700 hover:text-purple-600">📅 Calendar</Link>
          <Link to="/sales" className="text-gray-700 hover:text-purple-600">📊 Sales</Link>
          <Link to="/" className="text-red-500 hover:text-red-600 mt-4">🚪 Logout</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <header className="bg-white rounded-lg shadow p-4 mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </header>
        {children}
      </main>
    </div>
  );
}
