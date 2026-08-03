// SocialSidebar.tsx
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import LinkeinIcon from "../../assets/icons/linkedin.svg";
import SnapchatIcon from "../../assets/icons/snapchat.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import WebsiteIcon from "../../assets/icons/website.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";

interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  path: string;
}

const SocialSidebar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    const sidebar = document.getElementById("sidebarId");
    if (!sidebar) return;

    if (location.pathname === "/") {
      if (!sidebar.classList.contains("animate"))
        sidebar.classList.add("animate");
    } else {
      sidebar.classList.remove("animate");
    }
  }, [location.pathname]);

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

  const socialLinks: SocialLink[] = [
    {
      id: "snapchat",
      name: "Snapchat",
      path: "https://www.snapchat.com",
      icon: <img src={SnapchatIcon} />,
    },
    {
      id: "website",
      name: "Website",
      path: "https://www.example.com",
      icon: <img src={WebsiteIcon} />,
    },
    {
      id: "facebook",
      name: "Facebook",
      path: "https://www.facebook.com",
      icon: <img src={FacebookIcon} />,
    },
    {
      id: "instagram",
      name: "Instagram",
      path: "https://www.instagram.com",
      icon: <img src={InstagramIcon} />,
    },
    {
      id: "x",
      name: "X (Twitter)",
      path: "https://www.x.com",
      icon: <img src={TwitterIcon} />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      path: "https://www.linkedin.com",
      icon: <img src={LinkeinIcon} />,
    },
    {
      id: "youtube",
      name: "YouTube",
      path: "https://www.youtube.com",
      icon: <img src={YoutubeIcon} />,
    },
  ];

  return (
    <div
      id="sidebarId"
      className={`${isVisible ? "-right-10" : "right-[6px]"} sidebar animate 
      translate-y-[-120%] sm:translate-y-[-100%] md:translate-y-[-80%] lg:translate-y-[-50%]`}
    >
      <div className="bg-yellow-400 rounded-md shadow-lg flex flex-col items-center">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:outline outline-white transition-all duration-200 group relative"
            aria-label={link.name}
          >
            <span className="w-[20px] text-gray-900">{link.icon}</span>
            {/* Tooltip */}
            <span
              className="
              absolute right-full ml-1 px-1 py-1 
              bg-gray-900 text-white text-xs rounded 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-200 
              whitespace-nowrap pointer-events-none
            "
            >
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
