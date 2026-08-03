import DotsStripLeft from "../assets/dots-strip-left.svg";
import DotsStripRight from "../assets/dots-strip-right.svg";
import DotsStripBottom from "../assets/dots-strip-bottom.svg";
import AnimatedRibbon from "../assets/animated-ribbon.svg";
import { useEffect, useState } from "react";
import StrategyPanel from "../components/homepage/StrategyPanel";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const openPanel = () => {
    setIsPanelOpen(true);
  };
  const closePanel = () => {
    setIsPanelOpen(false);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowContent(true);
    }, 4500);

    const timer2 = setTimeout(() => {
      setShowStyles(true);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowStyles(false);
      }
      if (currentScrollY === 0) {
        setShowStyles(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-wrapper flex px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-4 sm:py-6 lg:py-8">
      {/* ===================================== Decoration Section =====================================  */}

      <div className="flex-1">
        <div className="shapes-wrapper bg-cold max-[770px]:hidden">
          <img
            src={DotsStripLeft}
            alt="decoration"
            className={`homepage-left-dots ${showStyles ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={DotsStripRight}
            alt="decoration"
            className={`homepage-right-dots ${showStyles ? "opacity-100" : "opacity-0"}`}
          />
          <img
            src={DotsStripBottom}
            alt="decoration"
            className={`homepage-bottom-dots ${showStyles ? "opacity-100" : "opacity-0"}`}
          />
          {showStyles && (
            <img
              src={AnimatedRibbon}
              alt="animation"
              className="animated-ribbon max-[770px]:hidden"
            />
          )}
        </div>

        {/* ===================================== Hero Section =====================================  */}

        <section
          className={`pt-10 sm:pt-20 md:pt-30 lg:pt-40 xl:pt-58 pl-0 sm:pl-8 lg:pl-0 -translate-y-2
    ${showContent ? "opacity-100 translate-y-2" : "opacity-0"} transition-all duration-1000 ease-in`}
        >
          <h5 className="text-md sm:text-lg md:text-xl lg:text-2xl text-black font-light tracking-wide">
            Annual Report <span className="font-bold ">2025</span>
          </h5>
          <h1
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light
                        text-black md:pt-4 tracking-widest"
          >
            Disciplined Growth.
          </h1>
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold 
                    text-black md:pt-4 pb-1 md:pb-4 lg:pb-6 xl:pb-12 sm:tracking-wider"
          >
            Diversified Returns.
          </h1>
          <button onClick={openPanel} className="primary-button">
            Theme of the Year
          </button>
        </section>
        <StrategyPanel isOpen={isPanelOpen} onCancel={closePanel} />
      </div>
    </div>
  );
};

export default HomePage;
