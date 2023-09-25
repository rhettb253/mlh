import './Home.css';
import Form from 'react-bootstrap/Form';

function TimeframeBuyer() {
    return (

        <Form.Group className="timeframeTextArea mb-3" controlId="formBasicText">
            <h6>Tell me about your timeframe:</h6>
            <Form.Control as="textarea" type="text" rows={2} id="timeframeTextArea" name="timeframeTextArea" placeholder="I will be moving up to Washington on the 27th and once I am there I will have accomodations for another month." />
        </Form.Group>
    )
}

export default TimeframeBuyer;