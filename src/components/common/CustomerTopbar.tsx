import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CustomerTopbarProps {
  onMenuClick: () => void;
}

export default function CustomerTopbar({ onMenuClick }: CustomerTopbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-3 px-4 flex items-center justify-between sticky top-0 z-10">
      {/* Left: Mobile menu button */}
      <div className="flex items-center slg:hidden">
        <button
          onClick={onMenuClick}
          className="slg:hidden hover:bg-gray-200 text-gray-700 hover:text-gray-900 p-1 rounded-md cursor-pointer"
        >
          <AlignJustify className="size-5" />
        </button>
      </div>

      {/* search bar */}
      <div className="flex-1 mx-6 slg:mx-0">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3c73b6]/50"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* notification/profile dropdown */}
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <Avatar className="size-9">
              <AvatarImage src="/path-to-avatar.jpg" alt="User" />
              <AvatarFallback className="bg-amber-500 text-white">
                <User size={18} />
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:block text-sm font-medium">
              John Doe
            </span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
