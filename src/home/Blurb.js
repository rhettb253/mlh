import './Home.css';
import { Link } from "react-router-dom";


function Blurb() {
    return (
        <div className="blurb shadow-3-strong">
            <h1>MALLORY LAYNE WEITZ</h1>
            <div>
                <p>Hi!</p>
                <p className="indent">Born and raised in Washington, I am a neighborhood expert and real estate advisor who has been serving the state from east to west for over 5 years. Local knowledge combined with negotiation skills, strategic marketing, financial savviness, and a meticulous eye for detail, I proudly and successfully help clients reach their goals throughout the buying or selling process.</p>
                <p>Click here to view my list of <Link to="/prevtrans">happy client transactions</Link>, and fill out the form below to start turning your dream into an address. 😊</p>
            </div>
        </div>
    );
  }
  
  export default Blurb;