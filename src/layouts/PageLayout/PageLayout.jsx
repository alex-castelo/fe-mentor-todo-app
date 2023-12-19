import { useContext } from "react";
import "./page-layout.css";

import useIsMobile from "../../hooks/useIsMobile";
import ThemeContext from "../../context/ThemeContext";

import darkBkgDesktopImg from "../../assets/img/bg-mobile-light.jpg";
import lightBkgDesktopImg from "../../assets/img/bg-desktop-light.jpg";
import darkBkgMobileImg from "../../assets/img/bg-mobile-dark.jpg";
import lightBkgMobileImg from "../../assets/img/bg-mobile-light.jpg";

const PageLayout = ({ children }) => {
  const [theme, __] = useContext(ThemeContext);
  const [isMobile, _] = useIsMobile();

  const backgroundUrl = () => {
    if (theme === "light") {
      if (isMobile) {
        return lightBkgMobileImg;
      }

      return lightBkgDesktopImg;
    }

    return isMobile ? darkBkgMobileImg : darkBkgDesktopImg;
  };

  return (
    <div className="page-wrapper">
      <div className="content">{children}</div>
      <img
        className="hero-img"
        src={backgroundUrl()}
        alt="Top background decorative"
      />
    </div>
  );
};

export default PageLayout;
