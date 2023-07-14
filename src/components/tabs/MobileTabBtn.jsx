const rectangleColors = {
  Mercury: "#419EBB",
  Venus: "#EDA249",
  Earth: "#6D2ED5",
  Mars: "#D14C32",
  Jupiter: "#D83A34",
  Saturn: "#CD5120",
  Uranus: "#1EC1A2",
  Neptune: "#2D68F0",
};

const MobileTabBtn = ({ children, activePlanet, activeClass, handleClick }) => {
  console.log(rectangleColors[activePlanet]);
  return (
    <button className={`mobile-tab-btn ${activeClass}`} onClick={handleClick}>
      {children}
      {activeClass === "active" && (
        <style>
          {`
            .mobile-tab-btn.active::after {
              background: ${rectangleColors[activePlanet]};
            }
          `}
        </style>
      )}
    </button>
  );
};

export default MobileTabBtn;
