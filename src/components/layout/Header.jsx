import { useEffect, useState } from "react";

import NavBar from "./NavBar";

const Header = ({ planetData, activePlanet, setActivePlanet }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const closeMenuOnResize = () => {
    if (window.innerWidth >= 768) {
      setShowMenu(false);
      setAnimationClass("");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      closeMenuOnResize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setShowMenu((prevState) => !prevState);

    if (!showMenu) {
      setAnimationClass("slide-in-right");
    } else {
      setAnimationClass("slide-out-right");
    }
  };

  return (
    <header className="header">
      <h1>The Planets</h1>

      <NavBar
        planetData={planetData}
        activePlanet={activePlanet}
        setActivePlanet={setActivePlanet}
        showMenu={showMenu}
        animationClass={animationClass}
      />

      <button
        className="menu-btn"
        aria-label="Click button to toggle menu open or closed"
        onClick={handleClick}
      ></button>
    </header>
  );
};

export default Header;
