import NavBar from "./NavBar";

const Header = ({ planetData, activePlanet, setActivePlanet }) => {
  return (
    <header className="header">
      <h1>The Planets</h1>

      <NavBar
        planetData={planetData}
        activePlanet={activePlanet}
        setActivePlanet={setActivePlanet}
      />

      <button
        className="menu-btn"
        aria-label="Click button to toggle menu open or closed"
      ></button>
    </header>
  );
};

export default Header;
