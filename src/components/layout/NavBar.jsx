import chevronIcon from "./../../assets/icon-chevron.svg";

const menuIconColors = {
  Mercury: "#DEF4FC",
  Venus: "#F7CC7F",
  Earth: "#545BFE",
  Mars: "#FF6A45",
  Jupiter: "#ECAD7A",
  Saturn: "#FCCB6B",
  Uranus: "#65F0D5",
  Neptune: "#497EFA",
};

const activeTabColors = {
  Mercury: "#419EBB",
  Venus: "#EDA249",
  Earth: "#6D2ED5",
  Mars: "#D14C32",
  Jupiter: "#D83A34",
  Saturn: "#CD5120",
  Uranus: "#1EC1A2",
  Neptune: "#2D68F0",
};

const NavBar = ({
  planetData,
  activePlanet,
  setActivePlanet,
  setShowMenu,
  animationClass,
  setAnimationClass,
}) => {
  // CLICK EVENT HANDLERS
  const handleMobileItemClick = (name) => {
    setActivePlanet(name);
    setShowMenu(false);
    setAnimationClass("slide-out-right");
  };

  const handleDesktopItemClick = (name) => {
    setActivePlanet(name);
  };

  // MOBILE MENU LIST ITEMS
  const mobileListItems = planetData.map((planet) => {
    const planetName = planet.name;
    return (
      <li
        key={planetName}
        className="mobile-list-item"
        onClick={() => handleMobileItemClick(planetName)}
      >
        <div
          className="mobile-list-item__icon"
          style={{
            backgroundColor: menuIconColors[planetName],
          }}
        ></div>
        {planetName}

        <img src={chevronIcon} alt="" aria-disabled className="chevron-icon" />
      </li>
    );
  });

  // DESKTOP MENU LIST ITEMS
  const desktopListItems = planetData.map((planet) => {
    const planetName = planet.name;
    const isActive = planetName === activePlanet;

    return (
      <li
        key={planetName}
        className={`desktop-list-item desktop-list-item__${planetName} ${
          isActive ? "active" : ""
        }`}
        onClick={() => handleDesktopItemClick(planetName)}
      >
        {planetName}
        {/* STYLE PSEUDO ELEMENTS */}
        {isActive && (
          <style>
            {`
              .desktop-list-item.active.desktop-list-item__${planetName}::before {
                background: ${activeTabColors[planetName]};
              }
            `}
          </style>
        )}
      </li>
    );
  });

  return (
    <nav className={`navbar ${animationClass}`}>
      <ul className="navbar__mobile-menu">{mobileListItems}</ul>

      <ul className="navbar__desktop-menu">{desktopListItems}</ul>
    </nav>
  );
};

export default NavBar;
