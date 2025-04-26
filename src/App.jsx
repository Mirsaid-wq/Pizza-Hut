import { useState } from "react";
import "./Header.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Menu from "./Menu.jsx";
import Food from "./Food.jsx";
import Save from "./Save.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Food />
      <Save />
    </>
  );
}

export default App;
