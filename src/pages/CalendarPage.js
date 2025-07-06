import React from 'react';
import { Calendar } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    id: 1,
    title: 'Rewarding Marketing',
    start: new Date(2025, 6, 1, 10, 0),
    end: new Date(2025, 6, 1, 23, 0),
    color: 'bg-green-100',
    avatar: 'https://i.pravatar.cc/150?img=3',
    time: '10:00 AM - 11:00 PM',
  },
  {
    id: 2,
    title: 'Rewarding Marketing',
    start: new Date(2025, 6, 6, 10, 0),
    end: new Date(2025, 6, 6, 11, 0),
    color: 'bg-blue-100',
    avatar: 'https://i.pravatar.cc/150?img=4',
    time: '10:00 AM - 11:00 PM',
  },
  {
    id: 3,
    title: 'Rewarding Marketing',
    start: new Date(2025, 6, 12, 10, 0),
    end: new Date(2025, 6, 12, 11, 0),
    color: 'bg-orange-100',
    avatar: 'https://i.pravatar.cc/150?img=5',
    time: '10:00 AM - 11:00 PM',
  },
];

const EventComponent = ({ event }) => {
  return (
    <div className={`p-1 rounded text-sm ${event.color}`}>      
      <div className="font-medium text-gray-700 truncate">{event.title}</div>
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>{event.time}</span>
        <img src={event.avatar} alt="avatar" className="w-5 h-5 rounded-full ml-2" />
      </div>
    </div>
  );
};

export default function CalendarPage() {
  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Calendar</h2>
          <p className="text-sm text-gray-500 mt-1">Full Event Schedule</p>
          <p className="text-sm text-gray-400">26 February 2023</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded bg-white border text-sm font-medium text-gray-800 hover:bg-gray-100">
            Weekly
          </button>
          <button className="px-3 py-1 rounded bg-black text-white text-sm font-medium">
            Monthly
          </button>
          <button className="px-3 py-1 rounded bg-white border text-sm font-medium text-gray-800 hover:bg-gray-100">
            Timeline
          </button>

          <button className="ml-3 px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700">
            + Add Event
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          components={{ event: EventComponent }}
          style={{ height: 600 }}
          toolbar={false}
          views={['month']}
        />
      </div>
    </>
  );
}