import planetMercuryImage from "../../assets/planet-mercury.svg";
import planetVenusImage from "../../assets/planet-venus.svg";
import planetEarthImage from "../../assets/planet-earth.svg";
import planetMarsImage from "../../assets/planet-mars.svg";
import planetJupiterImage from "../../assets/planet-jupiter.svg";
import planetSaturnImage from "../../assets/planet-saturn.svg";
import planetUranusImage from "../../assets/planet-uranus.svg";
import planetNeptuneImage from "../../assets/planet-neptune.svg";

const images = {
  planetMercuryImage,
  planetVenusImage,
  planetEarthImage,
  planetMarsImage,
  planetJupiterImage,
  planetSaturnImage,
  planetUranusImage,
  planetNeptuneImage,
};

const OverviewImage = ({ activePlanet }) => {
  const imageSrc = images[`planet${activePlanet}Image`];
  return (
    <img
      src={imageSrc}
      alt=""
      className={`planet-img overview-img planet-img__${activePlanet.toLowerCase()}`}
    />
  );
};

export default OverviewImage;
