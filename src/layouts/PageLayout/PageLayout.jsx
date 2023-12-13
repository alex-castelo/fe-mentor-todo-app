import { useContext } from "react";
import "./page-layout.css";

import useIsMobile from "../../hooks/useIsMobile";
import ThemeContext from "../../context/ThemeContext";

const PageLayout = ({ children }) => {
  const [theme, _] = useContext(ThemeContext);
  const [isMobile, __] = useIsMobile();

  const backgroundUrl = () => {
    if (theme === "light") {
      if (isMobile) {
        return "../../src/assets/img/bg-mobile-light.jpg";
      }

      return "../../src/assets/img/bg-desktop-light.jpg";
    }

    return isMobile
      ? "../../src/assets/img/bg-mobile-dark.jpg"
      : "../../src/assets/img/bg-desktop-dark.jpg";
  };

  return (
    <div className="page-wrapper">
      <div className="content">{children}</div>
      <img className="hero-img" src={backgroundUrl()}></img>
    </div>
  );
};

export default PageLayout;
