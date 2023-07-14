import OverviewImage from "./OverviewImage";
import StructureImage from "./StructureImage";
import SurfaceImage from "./SurfaceImage";

const ImageSection = ({ activePlanet, activeTab }) => {
  return (
    <section className="image-section">
      {activeTab === 0 ? (
        <OverviewImage activePlanet={activePlanet} />
      ) : activeTab === 1 ? (
        <StructureImage activePlanet={activePlanet} />
      ) : (
        <SurfaceImage activePlanet={activePlanet} />
      )}
    </section>
  );
};

export default ImageSection;
