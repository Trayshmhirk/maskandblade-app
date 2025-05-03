"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/data/nav-links";
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
      className={`bg-secondary-foreground text-white w-full ${
        isSticky ? "fixed top-0 left-0 z-50 shadow-md" : ""
      }`}
    >
      <div className="app_container flex justify-between items-center h-16">
        <Link href="/" className="flex items-center">
          <div className="text-xl md:text-2xl font-display font-bold text-barber-gold">
            MASKANDBLADE
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            variant="default"
            className="bg-accent hover:bg-accent/90 text-black"
          >
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </nav>

        {/* Mobile Navigation - Slide-in Sidebar */}
        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {/* <Fragment>
         
          {isMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
              onClick={toggleMenu}
            />
          )}

        
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
        </Fragment> */}
      </div>
    </header>
  );
};

export default Header;
