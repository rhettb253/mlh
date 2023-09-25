import './Home.css';
import Form from 'react-bootstrap/Form';

function TimeframeSeller() {
    return (

        <Form.Group className="timeframeTextArea mb-3" controlId="formBasicText">
            <h6>Tell me about your timeframe:</h6>
            <Form.Control as="textarea" type="text" rows={2} id="timeframeTextArea" name="timeframeTextArea" placeholder="I am starting a new job out of state next month." />
        </Form.Group>
    )
}

export default TimeframeSeller;