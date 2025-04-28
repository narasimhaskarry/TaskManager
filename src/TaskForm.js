import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("To Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    onAdd({ title, dueDate, category });
    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Task Title"
        className="border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 rounded"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
