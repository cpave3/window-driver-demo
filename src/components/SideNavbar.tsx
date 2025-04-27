import { Home, CheckSquare, Settings, Info } from "lucide-react";

interface SideNavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function SideNavbar({ currentPage, setCurrentPage }: SideNavbarProps) {
  const navItems = [
    { id: "home", text: "Home", icon: <Home size={20} /> },
    { id: "todos", text: "Todo List", icon: <CheckSquare size={20} /> },
    { id: "settings", text: "Settings", icon: <Settings size={20} /> },
    { id: "about", text: "About", icon: <Info size={20} /> },
  ];

  return (
    <nav
      className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5"
      data-testid="side-navbar"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold">ToDo App</h1>
        <p className="text-gray-400 text-sm">Manage your tasks</p>
      </div>

      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.id} className="nav-item">
            <button
              onClick={() => setCurrentPage(item.id)}
              className={`flex items-center w-full p-3 rounded-lg ${
                currentPage === item.id ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
              data-testid={`nav-${item.id}`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.text}
            </button>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-5 left-5 right-5" data-testid="navtype">
        <div className="text-sm text-gray-400">
          <p>Side Navbar (Version 1)</p>
        </div>
      </div>
    </nav>
  );
}

export default SideNavbar;
