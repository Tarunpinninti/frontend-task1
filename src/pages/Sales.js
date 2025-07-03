import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const userStats = [
  { label: 'User Actives', value: '310', percent: '+1.14%', avg: 'Users 525' },
  { label: 'New Users', value: '162', percent: '-0.62%', avg: 'Users 159' },
  { label: 'Avg. Time', value: '00:03:12', percent: '+0.32%', avg: '00:02:43' },
  { label: 'Bounce Rate', value: '86.18%', percent: '-0.87%', avg: 'Rate 82.54%' },
];

const learningData = [
  { name: 'Jan', value: 8 },
  { name: 'Feb', value: 8.5 },
  { name: 'Mar', value: 7 },
  { name: 'Apr', value: 7.8 },
  { name: 'May', value: 9 },
  { name: 'Jun', value: 10 },
  { name: 'Jul', value: 9.8 },
  { name: 'Aug', value: 10.3 },
  { name: 'Sep', value: 10.8 },
  { name: 'Oct', value: 11 },
  { name: 'Nov', value: 11.3 },
  { name: 'Dec', value: 12 },
];

const leadData = [
  { name: 'Jan', revenue: 10000 },
  { name: 'Feb', revenue: 15000 },
  { name: 'Mar', revenue: 18000 },
  { name: 'Apr', revenue: 23000 },
  { name: 'May', revenue: 32000 },
  { name: 'Jun', revenue: 45000 },
];

const pipelineData = [
  { name: 'Jan', prospecting: 200, proposal: 130, negotiation: 80 },
  { name: 'Feb', prospecting: 180, proposal: 160, negotiation: 90 },
  { name: 'Mar', prospecting: 300, proposal: 210, negotiation: 100 },
  { name: 'Apr', prospecting: 220, proposal: 150, negotiation: 110 },
  { name: 'May', prospecting: 280, proposal: 200, negotiation: 130 },
  { name: 'Jun', prospecting: 350, proposal: 240, negotiation: 150 },
];

const pieData = [
  { name: 'Total Paid', value: 234 },
  { name: 'Total Overdue', value: 234 },
  { name: 'Total Unpaid', value: 234 },
];
const COLORS = ['#805AD5', '#FEB2B2', '#63B3ED'];

export default function Sales() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Sales Analytics</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {userStats.map((stat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-sm text-gray-500 font-medium mb-1">{stat.label}</h4>
            <p className="text-xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-sm text-green-500">{stat.percent} <span className="text-gray-400">Average {stat.avg}</span></p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Learning Activity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Learning Activity</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={learningData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[4, 12]} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#805AD5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Lead Source */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Lead Source</h2>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={leadData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#805AD5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#805AD5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#805AD5" fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Pipeline */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Sales Pipeline</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={pipelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="prospecting" fill="#805AD5" />
              <Bar dataKey="proposal" fill="#63B3ED" />
              <Bar dataKey="negotiation" fill="#FEB2B2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Opportunities by Stage */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Opportunities by Stage</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}