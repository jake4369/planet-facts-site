import { useEffect, useState } from "react";

import MobileInfoTabs from "../tabs/MobileInfoTabs";

const Display = ({ activePlanet }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="display">
      <MobileInfoTabs
        activePlanet={activePlanet}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default Display;
