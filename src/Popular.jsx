import React from "react";
import "./Popular.css";

function Popular() {
  return (
    <section className="popular-section">
      <h2 className="popular-title">Popular Fast Foods</h2>
      <p className="popular-subtitle">Crispy, Every Bite Taste</p>
      <div className="popular-grid">
        <div className="food-card">
          <img
            src="path/to/burger.png"
            alt="Delicious Burger"
            className="food-image"
          />
          <div className="food-info">
            <h3 className="food-name">Delicious Burger</h3>
            <p className="food-price">$60.00</p>
          </div>
        </div>
        <div className="food-card">
          <img
            src="path/to/chicken.png"
            alt="Grilled Chicken"
            className="food-image"
          />
          <div className="food-info">
            <h3 className="food-name">Grilled Chicken</h3>
            <p className="food-price">$42.00</p>
          </div>
        </div>
        <div className="food-card">
          <img
            src="path/to/ruti-chicken.png"
            alt="Ruti With Chicken"
            className="food-image"
          />
          <div className="food-info">
            <h3 className="food-name">Ruti With Chicken</h3>
            <p className="food-price">$26.00</p>
          </div>
        </div>
        <div className="food-card">
          <img
            src="path/to/combo.png"
            alt="Fast Food Combo"
            className="food-image"
          />
          <div className="food-info">
            <h3 className="food-name">Fast Food Combo</h3>
            <p className="food-price">$34.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
