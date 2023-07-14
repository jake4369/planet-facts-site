import OverviewImage from "./OverviewImage";
import StructureImage from "./StructureImage";
import SurfaceImage from "./SurfaceImage";
import { motion } from "framer-motion";

const ImageSection = ({ activePlanet, activeTab }) => {
  return (
    <section className="image-section">
      <motion.div
        key={`${activePlanet}-${activeTab}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {activeTab === 0 ? (
          <OverviewImage activePlanet={activePlanet} />
        ) : activeTab === 1 ? (
          <StructureImage activePlanet={activePlanet} />
        ) : (
          <SurfaceImage activePlanet={activePlanet} />
        )}
      </motion.div>
    </section>
  );
};

export default ImageSection;
