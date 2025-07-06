// src/components/CreateTaskModal.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

export default function CreateTaskModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("Normal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    dispatch(
      addTask({
        id: Date.now(),
        title,
        assignee: assignee || "Anonymous",
        priority,
      })
    );

    setTitle("");
    setAssignee("");
    setPriority("Normal");
    onClose(); // Close modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Create New Task
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              className="w-full border px-3 py-2 rounded mt-1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Assignee</label>
            <input
              className="w-full border px-3 py-2 rounded mt-1"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Priority</label>
            <select
              className="w-full border px-3 py-2 rounded mt-1"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Normal</option>
              <option>Urgent</option>
              <option>Low</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}