
import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Award, Image, Target, Mail, Instagram, Facebook, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", text: "الرئيسية", icon: <Home className="w-5 h-5" /> },
    { to: "/about", text: "من أنا", icon: <User className="w-5 h-5" /> },
    { to: "/achievements", text: "إنجازاتي", icon: <Award className="w-5 h-5" /> },
    { to: "/gallery", text: "المعرض", icon: <Image className="w-5 h-5" /> },
    { to: "/goals", text: "أهدافي", icon: <Target className="w-5 h-5" /> },
    { to: "/contact", text: "اتصل بي", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-black/90 backdrop-blur-sm shadow-md py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">
              <span className="text-neon">محمد</span> البحراوي
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse rtl:space-x-reverse">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link flex items-center gap-1 ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-4 py-2 rounded-md ${
                        isActive
                          ? "bg-neon/10 text-neon"
                          : "text-gray-300 hover:bg-gray-800"
                      }`
                    }
                  >
                    {link.icon}
                    <span>{link.text}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-24 pb-16">
        <Outlet />
      </main>

      <footer className="bg-black/80 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-white mb-2">
                <span className="text-neon">محمد</span> البحراوي
              </h2>
              <p className="text-sm">طالب هندسة بترول - رياضي - مصور</p>
            </div>

            <div className="flex space-x-4 rtl:space-x-reverse">
              <a
                href="#instagram"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#facebook"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#whatsapp"
                className="text-gray-400 hover:text-neon transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">
            &copy; {new Date().getFullYear()} محمد البحراوي. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
