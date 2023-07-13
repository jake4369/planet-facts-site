import { useState } from "react";

import Header from "./components/layout/Header";
import Display from "./components/display/Display";

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
      <Display />
    </main>
  );
};

export default App;
