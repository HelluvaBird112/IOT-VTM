import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, Settings, LogIn } from "lucide-react";

export const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: BarChart2, label: "Statistics", path: "/statistics" },
    // { icon: Settings, label: "Controls", path: "/controls" },
    { icon: LogIn, label: "Login", path: "/login" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-sm">
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 ${
              location.pathname === item.path ? "bg-blue-50 text-blue-600" : ""
            }`}
          >
            <item.icon size={20} className="mr-3" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
