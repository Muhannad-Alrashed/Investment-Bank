import { useState, useEffect } from "react";

const PageNav: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNav(true);
      }
      if (currentScrollY === 0) {
        setShowNav(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`page-nav fixed -bottom-[100px] right-0 transition-all duration-500 linear z-10
  ${showNav ? " -translate-y-[100px]" : "translate-y-0"}`}
    >
      <button onClick={scrollToTop}>
        <div className="nav-arrow up"></div>
      </button>
      <button>
        <div className="nav-arrow left"></div>
      </button>
      <button>
        <div className="nav-arrow right"></div>
      </button>
    </div>
  );
};

export default PageNav;
