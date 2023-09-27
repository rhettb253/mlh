import './Home.css';
import { Link } from "react-router-dom";


function Blurb() {
    return (
        <div className="blurb shadow-3-strong">
            <h1>MALLORY LAYNE WEITZ</h1>
            <div>
                <p>Hi!</p>
                <p className="indent">I am a home grown realitor servicing multiple areas in the state of Washington. I have lived in Seattle for ten years and the last five I have been a realitor firmly planted in the Seattle Metropolitan area. This year I switched brokerages which allows me to service my roots back in the Tri-Cities of Eastern Washington where I spent the first 24 years of my life. Both areas of Washington are very familiar to me which enables me to provide comprehensive service to my prospective clients of both areas! I have accomplished a lot in my years as a realitor, you can see my <Link to="/prevtrans">previous transactions</Link> here or click the link at the top. If you would like me to reach out to you or send you some interesting homes that match your desired criteria I'd be happy to start looking for you! Just fill out the form below.</p>
            </div>
        </div>
    );
  }
  
  export default Blurb;