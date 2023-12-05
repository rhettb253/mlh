import './Home.css';
import Buyer from './Buyer';
import Seller from './Seller';

function GetConnected(props) {

    function handleChange(event) {
        const buysell = event.target.value;
        props.onChange(buysell)
    }

    function createForm() {
        if (props.clientWantsTo === "buy") {
            let form = <Buyer
                buyerInfo={props.buyerInfo}
                updateBuyerInfo={props.updateBuyerInfo} />;
            return form;
        } else if (props.clientWantsTo === 'sell') {
            let form = <Seller
                sellerInfo={props.sellerInfo}
                updateSellerInfo={props.updateSellerInfo} />;
            return form;
        }
    }

    return (
        <div className='getconnected shadow-3-strong'>
            <h3 className='h3'>Let's Get Connected!</h3>
            <div className="question1">
                <h2>Tell me why you are here:</h2>
                <div className='connect-text'>
                    <p>I am interested in </p>
                    <select name="introInput" id="introInput" onChange={handleChange}>
                        <option value={null}>buying/selling</option>
                        <option value="sell">selling</option>
                        <option value="buy">buying</option>
                    </select>
                    <p> my home.</p>
                </div>
            </div>
            {createForm()}
        </div>
    )
}

export default GetConnected;