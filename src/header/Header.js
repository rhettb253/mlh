import './Header.css';
import realitorimg from "../images/realitorimg.jpeg";
import NavBar from './NavBar';

function Header() {
    return (
        <div className="header">
            <img className='shadow-5-strong' src={realitorimg} alt="realitor" />
            <div>
                <h2>"Together we'll get you to the place you want to be."</h2>
                <NavBar />
            </div>
        </div>
    );
}

export default Header;