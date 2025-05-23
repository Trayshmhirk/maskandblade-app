"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { nav_config } from "@/lib/data/nav-config";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle mobile menu and handle body scrolling
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll and body overflow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Set body overflow based on menu state
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = ""; // Cleanup
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`bg-primary text-white w-full ${
        isSticky ? "fixed top-0 left-0 z-50 shadow-md" : ""
      }`}
    >
      <div className="app_container flex justify-between items-center h-16">
        <Link href="/" className="flex items-center">
          <h3 className="text-xl md:text-2xl font-bold">
            <span className="text-accent">MASK</span>
            <span className="text-white">AND</span>
            <span className="text-accent">BLADE</span>
          </h3>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="slg:hidden text-white p-2 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden slg:flex items-center space-x-6">
          {nav_config
            .filter((item) => item.type === "link")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          {nav_config
            .filter((item) => item.type === "button")
            .map((btn) => (
              <Link key={btn.href} href={btn.href}>
                <Button
                  variant="default"
                  className="bg-accent hover:bg-amber-300 text-black"
                >
                  {btn.label}
                </Button>
              </Link>
            ))}
        </nav>

        {/* Mobile Navigation - Slide-in Sidebar */}
        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
