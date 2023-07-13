import { useState } from "react";

import Header from "./components/layout/Header";
import Display from "./components/layout/Display";

import planetData from "./data.json";

const App = () => {
  const [activePlanet, setActivePlanet] = useState("mercury");

  return (
    <main>
      <Header
        planetData={planetData}
        activePlanet={activePlanet}
        setActivePlanet={setActivePlanet}
      />
      <Display planetData={planetData} activePlanet={activePlanet} />
    </main>
  );
};

export default App;
