import planetMercuryImage from "./../../assets/planet-mercury.svg";
import mercuryGeologyImage from "./../../assets/geology-mercury.png";
import planetVenusImage from "./../../assets/planet-venus.svg";
import venusGeologyImage from "./../../assets/geology-venus.png";
import planetEarthImage from "./../../assets/planet-earth.svg";
import earthGeologyImage from "./../../assets/geology-earth.png";
import planetMarsImage from "./../../assets/planet-mars.svg";
import marsGeologyImage from "./../../assets/geology-mars.png";
import planetJupiterImage from "./../../assets/planet-jupiter.svg";
import jupiterGeologyImage from "./../../assets/geology-jupiter.png";
import planetSaturnImage from "./../../assets/planet-saturn.svg";
import saturnGeologyImage from "./../../assets/geology-saturn.png";
import planetUranusImage from "./../../assets/planet-uranus.svg";
import uranusGeologyImage from "./../../assets/geology-uranus.png";
import planetNeptuneImage from "./../../assets/planet-neptune.svg";
import neptuneGeologyImage from "./../../assets/geology-neptune.png";

const images = {
  planetMercuryImage,
  mercuryGeologyImage,
  planetVenusImage,
  venusGeologyImage,
  planetEarthImage,
  earthGeologyImage,
  planetMarsImage,
  marsGeologyImage,
  planetJupiterImage,
  jupiterGeologyImage,
  planetSaturnImage,
  saturnGeologyImage,
  planetUranusImage,
  uranusGeologyImage,
  planetNeptuneImage,
  neptuneGeologyImage,
};

const SurfaceImage = ({ activePlanet }) => {
  const planetName = activePlanet.toLowerCase();
  const surfaceImage = images[`${activePlanet.toLowerCase()}GeologyImage`];
  const planetImagePath = images[`planet${activePlanet}Image`];

  return (
    <div
      className={`surface-img__container surface-img__${planetName}-container`}
    >
      <img
        src={planetImagePath}
        alt={activePlanet}
        className={`planet-img planet-img__${planetName}`}
      />

      <img
        src={surfaceImage}
        alt=""
        className={`surface-img surface-img__${planetName}`}
      />
    </div>
  );
};

export default SurfaceImage;
