import React, { useState } from "react";
import TaskBoard from "./TaskBoard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen p-4 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
        <TaskBoard tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
