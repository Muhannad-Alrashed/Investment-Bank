import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Chevron from "../../assets/chevron-big.png";
import Logo from "../../assets/Logo.svg";

const Landing = () => {
  const location = useLocation();
  const [showLainding, setShowLanding] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/Investment-Bank") return;

    const timer1 = setTimeout(() => {
      setShowLanding(true);
    }, 1);

    const timer2 = setTimeout(() => {
      setShowLanding(false);
    }, 4900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  return (
    showLainding && (
      <div className="absolute w-full h-[100vh] top-0 overflow-hidden">
        <img src={Logo} alt="logo" className={`animated-logo`} />

        <img src={Chevron} alt="chevron" className={`chevron-fast `} />

        <div className="navbar-overlay"></div>
      </div>
    )
  );
};

export default Landing;
