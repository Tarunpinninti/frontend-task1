import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const calendarEvents = [
  { date: 3, title: 'Rewarding Marketing', color: 'bg-red-100', time: '10:00 AM - 11:00 PM' },
  { date: 6, title: 'Rewarding Marketing', color: 'bg-blue-100', time: '10:00 AM - 11:00 PM' },
  { date: 12, title: 'Rewarding Marketing', color: 'bg-orange-100', time: '10:00 AM - 11:00 PM' },
  { date: 15, title: 'Rewarding Marketing', color: 'bg-orange-100', time: '10:00 AM - 11:00 PM' },
  { date: 27, title: 'Rewarding Marketing', color: 'bg-green-100', time: '10:00 AM - 11:00 PM' },
  { date: 29, title: 'Rewarding Marketing', color: 'bg-cyan-100', time: '10:00 AM - 11:00 PM' },
  { date: 1, title: 'Rewarding Marketing', color: 'bg-green-100', time: '10:00 AM - 11:00 PM' },
];

const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export default function CalendarPage() {
  const renderCells = () => {
    const cells = [];
    for (let i = 1; i <= 31; i++) {
      const event = calendarEvents.find(e => e.date === i);
      cells.push(
        <div key={i} className={`h-28 border p-1 ${event ? event.color : 'bg-white'}`}>
          <div className="font-semibold text-sm">{i}</div>
          {event && (
            <div className="text-xs mt-1">
              <div className="font-medium">{event.title}</div>
              <div className="text-gray-500">{event.time}</div>
            </div>
          )}
        </div>
      );
    }
    return cells;
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Calendar</h2>
            <p className="text-gray-500 text-sm">Full Event Schedule</p>
          </div>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-gray-100 rounded text-sm">Weekly</button>
            <button className="px-3 py-1 bg-black text-white rounded text-sm">Monthly</button>
            <button className="px-3 py-1 bg-gray-100 rounded text-sm">Timeline</button>
            <button className="ml-2 px-3 py-1 bg-blue-500 text-white rounded text-sm">+ Add Event</button>
          </div>
        </div>

        <div className="grid grid-cols-7 text-center mb-2 text-sm font-semibold text-gray-600">
          {days.map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {renderCells()}
        </div>
      </div>
    </DashboardLayout>
  );
}
