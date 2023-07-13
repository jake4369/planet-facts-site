import { useEffect, useState } from "react";

import TabBtn from "./TabBtn";

const TabSection = ({ activePlanet, activeTab, setActiveTab }) => {
  const tabNames = ["overview", "structure", "surface"];

  useEffect(() => {
    setActiveTab(0);
  }, [activePlanet]);

  const tabBtns = tabNames.map((tabName, index) => {
    const isActive = activeTab === index;

    const handleClick = () => {
      setActiveTab(index);
    };

    return (
      <TabBtn
        key={tabName}
        handleClick={handleClick}
        activePlanet={activePlanet}
        activeClass={isActive ? "active" : ""}
      >
        {tabName}
      </TabBtn>
    );
  });
  return <section className="tab-section">{tabBtns}</section>;
};

export default TabSection;
