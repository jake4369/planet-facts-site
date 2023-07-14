import planetMercuryInternalImage from "./../../assets/planet-mercury-internal.svg";
import planetVenusInternalImage from "./../../assets/planet-venus-internal.svg";
import planetEarthInternalImage from "./../../assets/planet-earth-internal.svg";
import planetMarsInternalImage from "./../../assets/planet-mars-internal.svg";
import planetJupiterInternalImage from "./../../assets/planet-jupiter-internal.svg";
import planetSaturnInternalImage from "./../../assets/planet-saturn-internal.svg";
import planetUranusInternalImage from "./../../assets/planet-uranus-internal.svg";
import planetNeptuneInternalImage from "./../../assets/planet-neptune-internal.svg";

const images = {
  planetMercuryInternalImage,
  planetVenusInternalImage,
  planetEarthInternalImage,
  planetMarsInternalImage,
  planetJupiterInternalImage,
  planetSaturnInternalImage,
  planetUranusInternalImage,
  planetNeptuneInternalImage,
};

const StructureImage = ({ planetImage, activePlanet }) => {
  const imageSrc = images[`planet${activePlanet}InternalImage`];

  return (
    <div>
      <img
        src={imageSrc}
        alt=""
        className={`planet-img planet-img__${activePlanet.toLowerCase()}`}
      />
    </div>
  );
};

export default StructureImage;
