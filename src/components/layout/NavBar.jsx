import chevronIcon from "./../../assets/icon-chevron.svg";

const menuIconColors = {
  mercury: "#DEF4FC",
  venus: "#F7CC7F",
  earth: "#545BFE",
  mars: "#FF6A45",
  jupiter: "#ECAD7A",
  saturn: "#FCCB6B",
  uranus: "#65F0D5",
  neptune: "#497EFA",
};

const activeTabColors = {
  mercury: "#419EBB",
  venus: "#EDA249",
  earth: "#6D2ED5",
  mars: "#D14C32",
  jupiter: "#D83A34",
  saturn: "#CD5120",
  uranus: "#1EC1A2",
  neptune: "#2D68F0",
};

const NavBar = ({ planetData, activePlanet, setActivePlanet }) => {
  // CLICK EVENT HANDLERS
  const handleMobileItemClick = (name) => {
    setActivePlanet(name);
  };

  const handleDesktopItemClick = (name) => {
    setActivePlanet(name);
  };

  // MOBILE MENU LIST ITEMS
  const mobileListItems = planetData.map((planet) => {
    const planetName = planet.name.toLowerCase();
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
    const planetName = planet.name.toLowerCase();
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
    <nav className="navbar">
      <ul className="navbar__mobile-menu">{mobileListItems}</ul>

      <ul className="navbar__desktop-menu">{desktopListItems}</ul>
    </nav>
  );
};

export default NavBar;
