import { useState } from "react";
import "./Header.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Food from "./Food.jsx";
import Save from "./Save.jsx";
import Popular from "./Popular.jsx";
import Quality from "./Quality.jsx";
import Special from "./Special.jsx";
import KFC from "./KFC.jsx";
import Piter from "./Piter.jsx";
import Deliver from "./Deliver.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Food />
      <Save />
      <Popular />
      <Quality />
      <Special />
      <KFC />
      <Piter />
      <Deliver />
    </>
  );
}

export default App;
