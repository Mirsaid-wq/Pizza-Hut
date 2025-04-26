import "./Food.css";
import image from "./assets/3df6d2b34ce0999319a2f87e7da0fed0162c3612.png";
import burger from "./assets/cd1459f30203102fc70c81607893562d022fde00.png";
import pasta from "./assets/b5c2e2489ee6aaa7cb5dc283ca66667d620bd429.png";
import pizza from "./assets/0b8163faf92943a143d37dab4fdb66f1542f7970.png";
import back_1 from "./assets/Background (2).png";
import back_2 from "./assets/Background (3).png";

function Food() {
  return (
    <>
      <section className="menu_1">
        <div className="menu_2">
          <div className="chicken">
            <img src={image} alt="" />
            <h3>Chicken</h3>
            <h3>8 Products</h3>
          </div>
          <div className="chicken">
            <img src={burger} alt="" />
            <h3>Pro Burger</h3>
            <h3>3 Products</h3>
          </div>
          <div className="chicken">
            <img src={pasta} alt="" />
            <h3>Pro Pasta</h3>
            <h3>3 Products</h3>
          </div>
          <div className="chicken">
            <img src={pizza} alt="" />
            <h3>Pro Pizza</h3>
            <h3>3 Products</h3>
          </div>
        </div>
      </section>
      <section className="food_1">
        <div>
          <img className="back_1" src={back_1} alt="" />
          <img className="back_2" src={back_2} alt="" />
        </div>
      </section>
    </>
  );
}

export default Food;
