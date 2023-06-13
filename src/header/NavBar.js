import './Header.css'
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/prevtrans">PREVIOUS TRANSACTIONS</Link></li>
        <li><Link to="/ftbr">FIRST TIME BUYER RESOURCES</Link></li>
        <li><Link to="/about">ABOUT ME</Link></li>
    </ul>
    );
  }
  
  export default NavBar;