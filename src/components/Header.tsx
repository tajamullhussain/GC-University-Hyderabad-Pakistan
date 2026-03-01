import React, { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const mobileItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Departments", url: "/departments" },
    { name: "Scholarships", url: "/scholarships" },
    { name: "Research", url: "/research" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      
      {/* Top Bar */}
      <div className="bg-gcuh-maroon text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[11px] font-bold tracking-wider">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-gcuh-gold" />
              <span>+92-22-2111856</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-gcuh-gold" />
              <span>info@gcuh.edu.pk</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Link to="/student-corner" className="hover:text-gcuh-gold">
              STUDENT CORNER
            </Link>
            <Link to="/complaint" className="hover:text-gcuh-gold">
              COMPLAINTS
            </Link>
            <Link to="#">ALUMNI</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.eirSUEHZHhrHA4Fhv32gRwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Logo"
            className="h-12 md:h-14 w-auto"
            onError={(e) => {
              e.target.src = "https://picsum.photos/seed/gcuh/100/100";
            }}
          />
          <div>
            <h1 className="text-gcuh-maroon font-extrabold text-lg md:text-xl leading-none">
              GC UNIVERSITY
            </h1>
            <p className="text-gcuh-gold font-bold text-[10px] md:text-xs tracking-[0.2em]">
              HYDERABAD
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link className="px-4 py-2 rounded-lg hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon" to="/">Home</Link>
          <Link className="px-4 py-2 rounded-lg hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon" to="/about">About</Link>
          <Link className="px-4 py-2 rounded-lg hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon" to="/departments">Departments</Link>
          <Link className="px-4 py-2 rounded-lg hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon" to="/scholarships">Scholarships</Link>
          <Link className="px-4 py-2 rounded-lg hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon" to="/research">Research</Link>
          <Link className="px-4 py-2 rounded-lg hover:bg-gcuh-maroon/5 hover:text-gcuh-maroon" to="/contact">Contact</Link>

          <Link
            to="/apply"
            className="ml-4 px-6 py-2.5 bg-gcuh-maroon text-white font-bold rounded-full hover:bg-gcuh-gold transition-all"
          >
            Apply Online
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gcuh-maroon"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-[75%] max-w-xs bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5 border-b flex justify-between items-center">
            <span className="font-bold text-gcuh-maroon">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="p-4 flex flex-col gap-3">
            {mobileItems.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex justify-between items-center p-4 text-lg font-bold text-slate-800 hover:bg-gcuh-maroon hover:text-white rounded-2xl transition-all"
              >
                {item.name}
                <ArrowRight className="w-5 h-5 opacity-60" />
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t">
            <Link
              to="/apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-4 bg-gcuh-maroon text-white text-center font-bold rounded-2xl hover:bg-gcuh-gold transition-all"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
