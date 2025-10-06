import { useState } from "react";

function ListFive() {
  // Step 1: Create state for the list and input
  const [tasks, setTasks] = useState(["Learn React", "Build Projects"]);
  const [newTask, setNewTask] = useState("");

  // Step 2: Function to add a new task
  function addTask() {
    // Prevent adding empty tasks
    if (newTask.trim() === "") return;

    // Create a new task array (immutability)
    setTasks([...tasks, newTask]);

    // Clear input
    setNewTask("");
  }

  // Step 3: Function to remove a task
  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // Step 4: Render the UI
  return (
    <div>
      <h2>Assignment 5: Dynamic List (Add & Remove) </h2>

      {/* Input and Button */}
      <input
        type="text"
        value={newTask}
        placeholder="Enter a new task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {/* Display the list */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>

      {/* Show message when list is empty */}
      {tasks.length === 0 && <p>No tasks available 💤</p>}
    </div>
  );
}

export default ListFive;
