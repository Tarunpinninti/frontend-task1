// src/components/Sidebar.js
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  MdDashboard,
  MdCalendarToday,
  MdAssignment,
  MdContacts,
  MdGroups,
  MdLogout,
  MdInsertChart,
  MdOutlineAccountCircle,
  MdMeetingRoom,
  MdCall,
  MdTask,
  MdPeople,
} from "react-icons/md";

const Sidebar = () => {
  const [openActivity, setOpenActivity] = useState(true);
  const [openDashboard, setOpenDashboard] = useState(true);

  return (
    <div className="w-64 bg-white h-screen p-4 border-r text-sm hidden sm:block">
      <div className="mb-6 font-bold text-xl flex items-center gap-2">
        <MdOutlineAccountCircle size={24} />
        CRMHUB
      </div>

      <div className="text-xs text-gray-400 uppercase mb-2">Menu</div>
      <button onClick={() => setOpenDashboard(!openDashboard)} className="font-medium mb-1 flex items-center gap-2">
        <MdDashboard /> Dashboard
      </button>
      {openDashboard && (
        <div className="ml-4 mb-2 space-y-1">
          <Link to="/dashboard/homepage" className="block hover:text-blue-600 flex items-center gap-2">
            <MdDashboard /> Homepage
          </Link>
          <Link to="/dashboard/sales" className="block hover:text-blue-600 flex items-center gap-2">
            <MdInsertChart /> Sales analytics
          </Link>
        </div>
      )}
      <Link to="/accounts" className="block mb-4 hover:text-blue-600 flex items-center gap-2">
        <MdPeople /> Accounts
      </Link>

      <div className="text-xs text-gray-400 uppercase mb-2">Leads</div>
      <Link to="/leads/contacts" className="block mb-1 hover:text-blue-600 flex items-center gap-2">
        <MdContacts /> Contacts
      </Link>
      <Link to="/leads" className="block mb-1 hover:text-blue-600 flex items-center gap-2">
        <MdGroups /> Leads
      </Link>
      <Link to="/leads/calendar" className="block mb-4 hover:text-blue-600 flex items-center gap-2">
        <MdCalendarToday /> Calendar
      </Link>

      <div className="text-xs text-gray-400 uppercase mb-2">Cases</div>
      <Link to="/cases" className="block mb-1 hover:text-blue-600 flex items-center gap-2">
        <MdAssignment /> Cases
      </Link>

      <button onClick={() => setOpenActivity(!openActivity)} className="font-medium mb-1 flex items-center gap-2">
        <MdAssignment /> Activities
      </button>
      {openActivity && (
        <div className="ml-4 mb-2 space-y-1">
          <Link to="/cases/activities/meetings" className="block hover:text-blue-600 flex items-center gap-2">
            <MdMeetingRoom /> Meetings
          </Link>
          <Link to="/cases/activities/calls" className="block hover:text-blue-600 flex items-center gap-2">
            <MdCall /> Calls
          </Link>
          <Link to="/cases/activities/tasks" className="block hover:text-blue-600 flex items-center gap-2">
            <MdTask /> Tasks
          </Link>
        </div>
      )}

      <Link to="/" className="text-red-500 hover:text-red-600 mt-4 flex items-center gap-2">
        <MdLogout /> Logout
      </Link>
    </div>
  );
};

export default Sidebar;
