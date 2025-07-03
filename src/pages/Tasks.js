import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Set up database', status: 'todo' },
    { id: 2, title: 'Design login screen', status: 'inprogress' },
    { id: 3, title: 'Deploy to AWS', status: 'done' },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, status: 'todo' }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const renderColumn = (status, title, bg) => (
    <div className="bg-white rounded-lg shadow p-4 flex-1">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <div
            key={task.id}
            className={`p-3 mb-3 rounded border border-gray-200 shadow-sm bg-${bg}-50`}
          >
            <p className="font-medium">{task.title}</p>
            <div className="flex justify-between text-sm mt-2">
              <button
                className="text-red-500 hover:underline"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
              {status !== 'done' && (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() =>
                    moveTask(task.id, status === 'todo' ? 'inprogress' : 'done')
                  }
                >
                  Mark {status === 'todo' ? 'In Progress' : 'Done'}
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Task Board</h1>

      <div className="mb-6">
        <input
          type="text"
          className="px-4 py-2 border rounded w-full max-w-md"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {renderColumn('todo', 'Not Started', 'gray')}
        {renderColumn('inprogress', 'In Progress', 'yellow')}
        {renderColumn('done', 'Completed', 'green')}
      </div>
    </DashboardLayout>
  );
}
