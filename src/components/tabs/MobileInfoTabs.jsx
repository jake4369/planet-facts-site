import MobileTabBtn from "./MobileTabBtn";

const MobileInfoTabs = ({ activePlanet, activeTab, setActiveTab }) => {
  const tabNames = ["overview", "structure", "surface"];

  const tabBtns = tabNames.map((tabName, index) => {
    const isActive = activeTab === index;

    const handleClick = () => {
      setActiveTab(index);
    };

    return (
      <MobileTabBtn
        key={tabName}
        handleClick={handleClick}
        activePlanet={activePlanet}
        activeClass={isActive ? "active" : ""}
      >
        {tabName}
      </MobileTabBtn>
    );
  });
  return <section className="mobile-info__tab-section">{tabBtns}</section>;
};

export default MobileInfoTabs;
