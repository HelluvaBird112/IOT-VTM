import React, { useState } from "react";
import { Search, Bell, User } from "lucide-react";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="bg-white shadow-sm ">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">IoT Dashboard</h1>
        </div>

        <div className="flex-1 mx-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};
