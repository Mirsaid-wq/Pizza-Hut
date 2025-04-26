import { ArrowLeft, ArrowRight } from "lucide-react";
import "./Menu.css";

function Menu() {
  return (
    <>
      <section className="menu">
        <div className="div_1">
          <h3>crispy, every bite taste</h3>
          <h1>Popular Food Items</h1>
        </div>
        <div className="div_2">
          <button className="first_button">
            <a href="#">
              {" "}
              <ArrowLeft />{" "}
            </a>
          </button>
          <button className="second_button">
            <a href="#">
              {" "}
              <ArrowRight />{" "}
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
export default Menu;
