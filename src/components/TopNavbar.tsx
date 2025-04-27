import { useState } from "react";
import { Menu } from "lucide-react";

interface TopNavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function TopNavbar({ currentPage, setCurrentPage }: TopNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Different structure: Using a dropdown menu for Pages instead of direct links
  const mainNavItems = [{ id: "home", text: "Home" }];

  const dropdownNavItems = [
    { id: "todos", text: "Todo List" },
    { id: "settings", text: "Settings" },
    { id: "about", text: "About" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-blue-600 text-white shadow-md z-40"
      data-testid="top-navbar"
    >
      <div className="container mx-auto px-4">
        {/* Main navbar content */}
        <div className="flex justify-between items-center h-16">
          {/* Logo area */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold mr-8">
              ToDo App
            </a>

            {/* Main nav items */}
            <div className="hidden md:flex space-x-4">
              {mainNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded ${
                    currentPage === item.id
                      ? "bg-blue-800"
                      : "hover:bg-blue-700"
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.text}
                </button>
              ))}

              {/* Pages dropdown */}
              <div className="relative" data-testid="pages-dropdown">
                <button
                  className="px-3 py-2 rounded hover:bg-blue-700 flex items-center"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  data-testid="dropdown-toggle"
                >
                  <span>Pages</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown content */}
                {mobileMenuOpen && (
                  <div
                    className="absolute mt-2 w-48 bg-white text-gray-800 rounded shadow-lg py-1 z-50"
                    data-testid="dropdown-menu"
                  >
                    {dropdownNavItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setCurrentPage(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 ${
                          currentPage === item.id
                            ? "bg-gray-100 text-blue-600"
                            : "hover:bg-gray-100"
                        }`}
                        data-testid={`nav-${item.id}`}
                      >
                        {item.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center">
            {/* User profile placeholder */}
            <div className="hidden md:flex items-center mr-4">
              <div
                className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center"
                data-testid="user-icon"
              >
                <span className="font-semibold">U</span>
              </div>
              <span className="ml-2">User</span>
            </div>

            {/* Version indicator */}
            <div className="text-sm mr-4" data-testid="navtype">
              <p>Top Navbar (V2)</p>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden ml-1 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden bg-blue-700 pb-4 px-2"
            data-testid="mobile-menu"
          >
            {mainNavItems.concat(dropdownNavItems).map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded my-1 ${
                  currentPage === item.id ? "bg-blue-800" : "hover:bg-blue-800"
                }`}
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default TopNavbar;
