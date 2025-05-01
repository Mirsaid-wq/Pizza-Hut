import { useState } from "react";
import "./Header.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Food from "./Food.jsx";
import Save from "./Save.jsx";
import Popular from "./Popular.jsx";

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
    </>
  );
}

export default App;
