import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  moveTask,
  editTask,
} from "../redux/taskSlice";
import TaskCard from "../components/TaskCard";
import CreateTaskModal from "../components/CreateTaskModal";

export default function Tasks() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (column, id) => {
    dispatch(editTask({ column, id, newTitle: editedText }));
    setEditingId(null);
    setEditedText("");
  };

  const statusLabels = [
    { label: "Not Started", key: "todo" },
    { label: "In Progress", key: "inProgress" },
    { label: "Completed", key: "done" },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Tasks</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          + Create Task
        </button>
      </div>

      {/* Task Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statusLabels.map(({ label, key }) => (
          <div key={key} className="bg-gray-50 p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">{label}</h2>
            <ul className="space-y-4">
              {tasks[key].map((task) => (
                <li key={task.id}>
                  {editingId === task.id ? (
                    <input
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleEdit(key, task.id)
                      }
                      onBlur={() => handleEdit(key, task.id)}
                      autoFocus
                      className="w-full px-3 py-2 border rounded"
                    />
                  ) : (
                    <TaskCard
                      task={task}
                      onEdit={() => {
                        setEditingId(task.id);
                        setEditedText(task.title);
                      }}
                      onDelete={() => {
                        const confirmDelete = window.confirm(
                          "Are you sure you want to delete this task?"
                        );
                        if (confirmDelete) {
                          dispatch(deleteTask({ column: key, id: task.id }));
                        }
                      }}
                      onMove={(to) =>
                        dispatch(moveTask({ from: key, to, id: task.id }))
                      }
                    />
                  )}
                </li>
              ))}
            </ul>

            {/* Optional Add Card Button */}
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 w-full py-2 bg-purple-50 text-purple-600 hover:bg-purple-100 rounded text-sm font-medium"
            >
              + Add Card
            </button>
          </div>
        ))}
      </div>

      {/* Create Modal */}
      <CreateTaskModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}