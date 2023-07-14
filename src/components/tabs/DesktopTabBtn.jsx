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

const DesktopTabBtn = ({
  children,
  activePlanet,
  activeClass,
  handleClick,
}) => {
  const planetName = activePlanet.name;
  return (
    <button
      className={`desktop-tab-btn ${activeClass}`}
      onClick={handleClick}
      style={{
        backgroundColor:
          activeClass === "active" ? activeTabColors[planetName] : "",
      }}
    >
      {children}
    </button>
  );
};

export default DesktopTabBtn;
