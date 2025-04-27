interface TopNavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function TopNavbar({ currentPage, setCurrentPage }: TopNavbarProps) {
  const navItems = [
    { id: "home", text: "Home" },
    { id: "todos", text: "Todo List" },
    { id: "settings", text: "Settings" },
    { id: "about", text: "About" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-blue-600 text-white shadow-md"
      data-testid="top-navbar"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold">
            ToDo App
          </a>

          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-2 py-1 rounded ${
                    currentPage === item.id
                      ? "bg-blue-800"
                      : "hover:bg-blue-700"
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>

          <div className="text-sm">
            <p>Top Navbar (Version 2)</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
