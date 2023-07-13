const rectangleColors = {
  mercury: "#419EBB",
  venus: "#EDA249",
  earth: "#6D2ED5",
  mars: "#D14C32",
  jupiter: "#D83A34",
  saturn: "#CD5120",
  uranus: "#1EC1A2",
  neptune: "#2D68F0",
};

const TabBtn = ({ children, activePlanet, activeClass, handleClick }) => {
  return (
    <button className={`tab-btn ${activeClass}`} onClick={handleClick}>
      {children}
      {activeClass === "active" && (
        <style>
          {`
            .tab-btn.active::after {
              background: ${rectangleColors[activePlanet]};
            }
          `}
        </style>
      )}
    </button>
  );
};

export default TabBtn;
