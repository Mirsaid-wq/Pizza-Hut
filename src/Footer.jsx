import { Facebook, Instagram } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_2">
          <div className="footer_1">
            <h2>Pizza Hut</h2>
            <p>Tuesday – Saturday: 12:00pm – 23:00pm</p>
            <p>Closed-Sunday</p>
            <p>5 star rated on TripAdvisor</p>
          </div>
          <div className="footer_div">
            <ul>
              <h1>
                <a href="#">About</a>
              </h1>
              <li>
                <a href="#"> Fredoka One</a>
              </li>
              <li>
                <a href="#"> Special Dish</a>
              </li>
              <li>
                <a href="#"> Reservation</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul>
              <h1>
                <a href="#">Menu</a>
              </h1>

              <li>
                <a href="#">Steaks</a>
              </li>
              <li>
                <a href="#">Burgers</a>
              </li>
              <li>
                <a href="#"> Coctails</a>
              </li>
              <li>
                <a href="#">Desserts</a>
              </li>
            </ul>
          </div>
          <div className="footer_s">
            <h1>
              <a href="#">NewsLetter</a>
            </h1>
            <p>Get recent news and updates.</p>
            <input type="text" placeholder="Email Adres" name="" id="" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="last">
          <h3>© 2024 pizza hut | All shawonetc3 Themes .</h3>
          <div>
            <h3>
              {" "}
              <Facebook /> FaceBook
            </h3>
            <h3>
              <Instagram /> Instagram
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
