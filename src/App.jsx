// import React, { useState } from "react";

// export default function TodoApp() {
//   const [task, setTask] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = () => {
//     if (task.trim() === "") {
//       alert("Please enter a to-do task!");
//       return;
//     }
//     const newTodo = { id: Date.now(), title: task, completed: false };
//     setTodos([newTodo, ...todos]);
//     setTask("");
//     alert("Task added successfully!");
//   };

//   const toggleComplete = (id) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-4">
//       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
//         <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
//           My To-Do App
//         </h1>
//         <div className="flex gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Enter a task..."
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             className="flex-grow p-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//           <button
//             onClick={handleAddTodo}
//             className="bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 transition"
//           >
//             Add
//           </button>
//         </div>
//         <ul className="space-y-2">
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex items-center justify-between p-2 border-b border-gray-200"
//             >
//               <label className="flex items-center gap-2 w-full">
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => toggleComplete(todo.id)}
//                   className="accent-indigo-500"
//                 />
//                 <span
//                   className={todo.completed ? "line-through text-gray-500" : ""}
//                 >
//                   {todo.title}
//                 </span>
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() === "") {
      alert("Please enter a to-do task!");
      return;
    }
    const newTodo = { id: Date.now(), title: task, completed: false };
    setTodos([newTodo, ...todos]);
    setTask("");
    alert("Task added successfully!");
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
          My To-Do App
        </h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-grow p-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleAddTodo}
            className="bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 transition "
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 border-b border-gray-200"
            >
              <label className="flex items-center gap-2 w-full">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  className="accent-indigo-500"
                />
                <span
                  className={`flex-grow ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.title}
                </span>
              </label>
              {todo.completed && (
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-500 hover:text-red-700 transition text-sm"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
