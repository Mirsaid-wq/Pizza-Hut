import { ShoppingBasket } from "lucide-react";
import { Button } from "@material-tailwind/react";
import "./Header.css";
import logo from "./assets/Logo-Pizza-Hut 2.png";
function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
        <h2>pizza hut</h2>
      </div>
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
        <div>
          <ShoppingBasket />
          <Button>Button</Button>
        </div>
      </ul>
    </header>
  );
}
export default Header;
