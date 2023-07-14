import Stat from "./Stat";

const StatSection = ({ planetData, activePlanet }) => {
  const activePlanetStats = planetData.filter(
    (planet) => planet.name === activePlanet
  )[0];

  const statData = {
    "rotation time": activePlanetStats.rotation,
    "revolution time": activePlanetStats.revolution,
    radius: activePlanetStats.radius,
    "average temp.": activePlanetStats.temperature,
  };

  return (
    <section className="stat-section">
      {Object.entries(statData).map(([key, value]) => (
        <Stat key={key} title={key} data={value} />
      ))}
    </section>
  );
};

export default StatSection;
