import { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import { FiDownload, FiX, FiMenu } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import Chevron from "../../assets/chevron.svg";
import MenuIcon from "../../assets/icons/menu.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    setIsMenuOpen(false);
    navigate("/");
  };

  // Hide when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      const navbar = document.getElementById("navbarId");
      if (navbar) navbar.style.borderRadius = "0px";
    }
  }, [location.pathname]);

  const menuItems = [
    { name: "Overview", path: "/overview", icon: "📊" },
    { name: "Leadership", path: "/leadership", icon: "👥" },
    { name: "Strategic Review", path: "/strategic", icon: "📈" },
    { name: "Business Review", path: "/business", icon: "💼" },
    { name: "Sustainability Review", path: "/sustainability", icon: "🌱" },
    { name: "Financial Statements", path: "/financial", icon: "💰" },
  ];

  return (
    <nav
      id="navbarId"
      className={`navbar ${isVisible ? "-top-full -translate-y-full" : ""}
      transition-transform duration-300 ease-in-out`}
      aria-label="Main Navigation"
    >
      {/* Visisble Links */}
      <div className="flex justify-between items-center header-height px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
        <button className="w-20 cursor-pointer flex justify-start items-center gap-1 hover-primary-dark">
          <span className="sm:text-md md:text-lg max-[300px]:hidden">
            العربية
          </span>
          <FiDownload size={22} className="hover-primary-dark " />
        </button>

        <button onClick={navigateToHome}>
          <Logo />
        </button>

        {isMenuOpen ? (
          <button
            className="w-20 cursor-pointer flex justify-end items-center gap-1 hover-primary-dark"
            onClick={closeMenu}
          >
            <FiX size={24} className="hover-primary-dark close-icon-wrapper" />
            <span className="sm:text-md md:text-lg max-[300px]:hidden">
              Menu
            </span>
          </button>
        ) : (
          <button
            className="w-20 cursor-pointer flex justify-end items-center gap-1 hover-primary-dark"
            onClick={openMenu}
            onMouseEnter={() => setIsMenuHovered(true)}
            onMouseLeave={() => setIsMenuHovered(false)}
          >
            {isMenuHovered ? (
              <FiMenu size={24} className="hover-primary-dark " />
            ) : (
              <img
                src={MenuIcon}
                alt="menu-icon"
                className="w-[26px]  hover-primary-dark"
              />
            )}
            <span className="sm:text-md md:text-lg max-[300px]:hidden">
              Menu
            </span>
          </button>
        )}
      </div>

      <div
        className={`menu-wrapper overflow-hidden 
          ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"} `}
      >
        <img
          src={Chevron}
          alt="animation"
          className={`chevron ${isMenuOpen ? "block" : "hidden"}`}
        />
        <ul
          className={`menu ${isMenuOpen ? "menu-open" : "menu-close"} p-2 sm:p-4 md:p-10 lg:px-24`}
        >
          {menuItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="menu-item w-55 md:w-70 lg:w-85 text-md md:text-lg lg:text-xl xl:text-2xl 
                                      p-1 md:p-2 lg:p-3 sm:m-2 md:m-3 lg:m-4"
              >
                <span>{item.icon}</span> {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
