import React from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

function TaskBoard({ tasks, setTasks }) {
  const categories = ["To Do", "In Progress", "Done"];

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <TaskForm onAdd={addTask} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {categories.map((category) => (
          <div key={category} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onUpdate={updateTask}
                  onDelete={deleteTask}
                  setTasks={setTasks}
                  tasks={tasks}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;
