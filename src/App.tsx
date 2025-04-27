import { useState } from "react";
import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";
import HomePage from "./pages/HomePage";
import TodoListPage from "./pages/TodoListPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";

// Define the Todo type
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  // State for the todos
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Cypress", completed: false },
    { id: 2, text: "Implement Window Driver Pattern", completed: false },
    { id: 3, text: "Write E2E Tests", completed: false },
  ]);

  // State for the current page
  const [currentPage, setCurrentPage] = useState("home");

  // State for the navbar version (1 = side nav, 2 = top nav)
  // NOTE: change navbar here
  const [navbarVersion, setNavbarVersion] = useState(2);

  // Function to add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Function to toggle todo completion status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Function to delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to render the current page
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "todos":
        return (
          <TodoListPage
            todos={todos}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      case "settings":
        return <SettingsPage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Toggle navbar version button */}
      {/* <div className="absolute top-2 right-2 z-50"> */}
      {/*   <button */}
      {/*     onClick={() => setNavbarVersion(navbarVersion === 1 ? 2 : 1)} */}
      {/*     className="text-white px-3 py-1 bg-blue-500 rounded hover:bg-blue-600" */}
      {/*     data-testid="toggle-navbar" */}
      {/*   > */}
      {/*     Switch to {navbarVersion === 1 ? "Top" : "Side"} Navbar */}
      {/*   </button> */}
      {/* </div> */}

      {/* Render the appropriate navbar based on version */}
      {navbarVersion === 1 ? (
        <SideNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      ) : (
        <TopNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}

      {/* Main content area */}
      <div
        className={`full-width flex-grow p-6 ${navbarVersion === 1 ? "ml-64" : "mt-16"}`}
      >
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
