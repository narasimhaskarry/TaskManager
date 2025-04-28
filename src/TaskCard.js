import React from "react";
import { useDrag, useDrop } from "react-dnd";

function TaskCard({ task, onUpdate, onDelete, setTasks, tasks }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (draggedItem) => {
      const updatedTasks = tasks.map((t) => {
        if (t.id === draggedItem.id) {
          return { ...t, category: task.category };
        }
        return t;
      });
      setTasks(updatedTasks);
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`p-4 mb-4 bg-gray-50 rounded shadow-md cursor-move ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-500">
        Due: {task.dueDate || "No due date"}
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => {
            const newTitle = prompt("Edit task title:", task.title);
            if (newTitle) {
              onUpdate(task.id, { ...task, title: newTitle });
            }
          }}
          className="text-blue-500 hover:underline text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
