import { useState } from "react";
import "./Header.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
