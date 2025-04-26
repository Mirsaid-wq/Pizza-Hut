import "./Save.css";
import save from "./assets/HD-wallpaper-hamburger-flames-fast-food-food.jpg";
function Save() {
  return (
    <>
      <section className="save">
        <div className="save__container">
          <h2>save 20%</h2>
          <h1 className="save__title">Today's Astackin Day</h1>
          <h2>grilled chiken $59,00</h2>
          <button>Order Now</button>
        </div>
        <img src={save} alt="" />
      </section>
    </>
  );
}
export default Save;
