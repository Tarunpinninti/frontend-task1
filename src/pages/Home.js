import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import DashboardLayout from '../layouts/DashboardLayout';
import { FaUsers, FaDollarSign, FaClipboardList, FaUserPlus } from 'react-icons/fa';
import { MdPlayCircle } from 'react-icons/md';

function DashboardCard({ title, value, icon, stat }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition-all">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-gray-500 text-sm font-medium">{title}</h4>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          <span className="text-green-500 text-xs mt-1 inline-block">{stat}</span>
        </div>
        <div className="text-purple-600 text-3xl">{icon}</div>
      </div>
    </div>
  );
}

const chartData = [
  { name: 'Jan', value: 24000 },
  { name: 'Feb', value: 18000 },
  { name: 'Mar', value: 22000 },
  { name: 'Apr', value: 27500 },
  { name: 'May', value: 30000 },
  { name: 'Jun', value: 29000 },
];

const caseData = [
  { name: '01', title: 'Warranty Coverage', type: 'Incident', status: 'Pending', priority: 'Normal' },
  { name: '02', title: 'Discount Issue', type: 'Incident', status: 'Pending', priority: 'Low' },
  { name: '03', title: 'Warranty Coverage', type: 'Question', status: 'New', priority: 'Normal' },
  { name: '04', title: 'Product Issue', type: 'Incident', status: 'Pending', priority: 'High' },
];

const activityData = [
  'Correct discount amount',
  'Handing the order to the shipping Provider',
  'Payment issue check',
  'Prepare product presentation',
];

export default function Home() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome Back, Tarun 👋</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <DashboardCard title="Total Customers" value="21,978" icon={<FaUsers />} stat="+5.2% this month" />
        <DashboardCard title="Active Customers" value="10,369" icon={<FaClipboardList />} stat="+2.4% active" />
        <DashboardCard title="Total Profit" value="$64,981.97" icon={<FaDollarSign />} stat="+7.8% growth" />
        <DashboardCard title="Total Expense" value="$18,158.21" icon={<FaUserPlus />} stat="-1.3% down" />
      </div>

      {/* Chart + Video */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Monthly Sales Overview</h2>
            <div className="space-x-2">
              <button className="text-sm text-gray-500">Week</button>
              <button className="text-sm text-gray-800 font-semibold">Month</button>
              <button className="text-sm text-gray-500">Yearly</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#805ad5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">EspoCRM Overview</h2>
          <div className="relative rounded-xl overflow-hidden">
            <img src="https://dummyimage.com/400x200/ccc/fff&text=EspoCRM+Video" alt="Video Placeholder" className="w-full" />
            <button className="absolute inset-0 flex items-center justify-center text-white text-5xl">
              <MdPlayCircle />
            </button>
          </div>
        </div>
      </div>

      {/* My Cases + My Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">My Cases</h2>
            <button className="text-sm px-4 py-1 bg-purple-100 text-purple-600 rounded">+ New Case</button>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="text-gray-600 border-b">
              <tr>
                <th className="py-2">#</th>
                <th className="py-2">Name</th>
                <th className="py-2">Type</th>
                <th className="py-2">Status</th>
                <th className="py-2">Priority</th>
              </tr>
            </thead>
            <tbody>
              {caseData.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2 text-gray-600">{row.name}</td>
                  <td className="py-2">{row.title}</td>
                  <td>{row.type}</td>
                  <td>
                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                      {row.status}
                    </span>
                  </td>
                  <td>{row.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">My Activities</h2>
            <button className="text-sm text-purple-600 hover:underline">View all</button>
          </div>
          <ul className="space-y-3">
            {activityData.map((item, idx) => (
              <li key={idx} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded">
                <span>{item}</span>
                <button className="text-sm text-purple-600 hover:underline">View</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
