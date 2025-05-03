import { NAV_LINKS } from "@/lib/data/nav-links";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar = ({ isMenuOpen, toggleMenu }: SidebarProps) => {
  return (
    <Fragment>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-4/5 max-w-[300px] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="h-full bg-[#121212] shadow-lg">
          <div className="flex justify-end p-4">
            <button
              className="text-white p-2 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 p-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-accent text-lg transition-colors py-2"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="default"
              className="mt-4 bg-accent hover:bg-accent/90 text-black py-3 text-lg"
              onClick={toggleMenu}
            >
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
