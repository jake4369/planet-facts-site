import { useEffect, useState } from "react";

import MobileInfoTabs from "../tabs/MobileInfoTabs";
import ImageSection from "../planetImages/ImageSection";
import InfoSection from "../info/InfoSection";
import DesktopInfoTabs from "../tabs/DesktopInfoTabs";

const Display = ({ planetData, activePlanet }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setActiveTab(0);
  }, [activePlanet]);

  return (
    <div className="display">
      <MobileInfoTabs
        activePlanet={activePlanet}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="outer-flex-container">
        <ImageSection activePlanet={activePlanet} activeTab={activeTab} />

        <div className="inner-flex-container">
          <InfoSection
            planetData={planetData}
            activePlanet={activePlanet}
            activeTab={activeTab}
          />
          <DesktopInfoTabs
            activePlanet={activePlanet}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
