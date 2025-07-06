import React from "react";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        {/* Header Top Bar */}
        <header className="bg-white rounded-lg shadow p-4 mb-6 flex items-center justify-between">
          {/* Search */}
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Right Side: Icons + User */}
          <div className="flex items-center gap-4">
            <button className="text-xl text-gray-500 hover:text-gray-700">＋</button>
            <button className="text-xl text-gray-500 hover:text-gray-700">🔔</button>
            <div className="flex items-center gap-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">Uziel Renta ▾</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}