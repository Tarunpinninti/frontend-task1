// src/components/TaskCard.js
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const priorityColors = {
  Urgent: "bg-red-100 text-red-600",
  Normal: "bg-blue-100 text-blue-600",
  Low: "bg-yellow-100 text-yellow-600",
};

export default function TaskCard({ task, onEdit, onDelete, onMove }) {
  const { title, assignee = "John Doe", priority = "Normal" } = task;

  return (
    <div className="bg-white shadow rounded-xl p-4 space-y-2 border border-gray-100">
      {/* Date + Priority */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Aug 27 20:00</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColors[priority]}`}
        >
          {priority}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-semibold text-gray-800 break-words"
      >
        {title}
      </h3>

      {/* Footer: Avatar + Icons */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <img
            src={`https://i.pravatar.cc/40?u=${assignee}`}
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-600">{assignee}</span>
        </div>
        <div className="flex gap-3 text-gray-400 text-sm">
          <FaEdit
            className="cursor-pointer hover:text-purple-600"
            title="Edit"
            onClick={onEdit}
          />
          <FaTrash
            className="cursor-pointer hover:text-red-500"
            title="Delete"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
}