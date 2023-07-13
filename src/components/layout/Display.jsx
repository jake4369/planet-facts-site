import { useEffect, useState } from "react";

import MobileInfoTabs from "../tabs/MobileInfoTabs";

const Display = ({ planetData, activePlanet }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="display">
      {isMobile && (
        <MobileInfoTabs
          activePlanet={activePlanet}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
};

export default Display;
