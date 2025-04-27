import { useState } from "react";
import { Trash2, Check, Square, XSquare } from "lucide-react";
import { Todo } from "../App";

interface TodoListPageProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoListPage({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
}: TodoListPageProps) {
  const [newTodoText, setNewTodoText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      addTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto" data-testid="todo-page">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>

      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            data-testid="new-todo-input"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            data-testid="add-todo-button"
          >
            Add Task
          </button>
        </div>
      </form>

      {/* Todo List */}
      <div className="bg-white shadow rounded-lg">
        {todos.length === 0 ? (
          <div
            className="p-6 text-center text-gray-500"
            data-testid="empty-todo-list"
          >
            No tasks yet. Add some tasks to get started!
          </div>
        ) : (
          <ul className="divide-y divide-gray-200" data-testid="todo-list">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="p-4 flex items-center justify-between"
                data-testid={`todo-item-${todo.id}`}
              >
                <div className="flex items-center">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="mr-3 text-gray-500 hover:text-blue-500"
                    data-testid={`toggle-todo-${todo.id}`}
                  >
                    {todo.completed ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      <Square size={20} />
                    )}
                  </button>
                  <span
                    className={
                      todo.completed ? "line-through text-gray-400" : ""
                    }
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete"
                  data-testid={`delete-todo-${todo.id}`}
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoListPage;
