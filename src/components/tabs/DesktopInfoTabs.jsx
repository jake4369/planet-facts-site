import DesktopTabBtn from "./DesktopTabBtn";

const DesktopInfoTabs = ({ activePlanet, activeTab, setActiveTab }) => {
  const tabNames = ["overview", "structure", "surface"];

  const tabBtns = tabNames.map((tabName, index) => {
    const isActive = activeTab === index;

    const handleClick = () => {
      setActiveTab(index);
    };

    return (
      <DesktopTabBtn
        key={tabName}
        handleClick={handleClick}
        activePlanet={activePlanet}
        activeClass={isActive ? "active" : ""}
      >
        {tabName}
      </DesktopTabBtn>
    );
  });

  return <section className="desktop-info__tab-section">{tabBtns}</section>;
};

export default DesktopInfoTabs;
