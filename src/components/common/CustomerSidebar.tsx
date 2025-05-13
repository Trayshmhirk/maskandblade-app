import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home as HomeIcon,
  Calendar,
  BarChart3,
  Settings as SettingsIcon,
  User,
  X,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "../../lib/utils";

const nav_links = [
  { href: "/customer/dashboard", label: "Dashboard", icon: HomeIcon },
  { href: "/customer/appointments", label: "Appointments", icon: Calendar },
  { href: "/customer/history", label: "Booking History", icon: BarChart3 },
  { href: "/customer/settings", label: "Settings", icon: SettingsIcon },
];

interface CustomerSidebarProps {
  sidebarOpen: boolean;
  onClose: () => void;
}

export default function CustomerSidebar({
  sidebarOpen,
  onClose,
}: CustomerSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-black/50 transition-opacity backdrop-blur-[2px] slg:hidden",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-white border-r border-gray-300 transition-transform transform slg:static slg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
              MB
            </div>
            <h1 className="slg:text-lg font-bold text-gray-800">
              MaskAndBlade
            </h1>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-gray-100 slg:hidden cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {nav_links.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-4 py-3 font-semibold transition-all duration-300",
                  isActive
                    ? "bg-accent/10 text-amber-600"
                    : "hover:bg-gray-100 text-gray-700"
                )}
              >
                <item.icon className="size-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-3">
          <button
            className="w-full flex items-center gap-4 rounded-lg px-4 py-3 text-base font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
            onClick={() => {
              // Add logout logic
              console.log("Logging out...");
            }}
          >
            <LogOut className="size-5" />
            Logout
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-4 p-4 border-t border-gray-300">
          {/* Profile Picture */}
          <Avatar className="size-9">
            <AvatarImage src="/path-to-avatar.jpg" alt="User" />
            <AvatarFallback className="bg-amber-500 text-white">
              <User size={18} />
            </AvatarFallback>
          </Avatar>

          <div>
            <div className="text-sm font-bold text-gray-800">John Doe</div>
            <div className="text-xs text-gray-500">Customer</div>
          </div>
        </div>
      </div>
    </>
  );
}
