import './Home.css';
import { useState } from 'react';
import TimeframeBuyer from './TimeframeBuyer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MDBContainer } from 'mdb-react-ui-kit';

function Buyer(props) {
  let [showTimeframeTextArea, setShowTimeframeTextArea] = useState(false);

  function timeframeHandler(event) {
    if (event.target.value === 'Yes') {
      setShowTimeframeTextArea(true);
    }
    else if (event.target.value === 'No') {
      setShowTimeframeTextArea(false);
    }
  }
  return (

    <MDBContainer className='buyer my-5'>
      <h3 className="question2">Please tell me what are you looking for in your next home:</h3>
      <hr />
      <h5>What type of home are you interested in?</h5>
      <Form id="buyerform" onSubmit={props.updateBuyerInfo}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="House" id='house' name='house' value='house' defaultChecked />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Townhome" id='townhome' name='townhome' value='townhome' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Condo" id='condo' name='condo' value='condo' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Multi-family" id='multifamily' name='multifamily' value='multifamily' />
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>How much are you willing to spend?</h5>
          <Form.Select aria-label="Default select example" name="price" id="price">
            <option value=''>Home price</option>
            <option value='$300k'>Up to $300,000</option>
            <option value='$400k'>Up to $400,000</option>
            <option value='$500k'>Up to $500,000</option>
            <option value='$600k'>Up to $600,000</option>
            <option value='$700k'>Up to $700,000</option>
            <option value='$800k'>Up to $800,000</option>
            <option value='$900k'>Up to $900,000</option>
            <option value='$1million'>Up to $1,000,000</option>
            <option value='$1.1million'>Up to $1,100,000</option>
            <option value='$1.2million'>Up to $1,200,000</option>
            <option value='$1.3million'>Up to $1,300,000</option>
            <option value='$1.4million'>Up to $1,400,000</option>
            <option value='$1.5million'>Up to $1,500,000</option>
            <option value='$1.5million++'>$1,500,000+</option>
            <option value='$2million++'>$2,000,000+</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>How many bedrooms do you need?</h5>
          <Form.Select aria-label="Default select example" name="beds" id="beds">
            <option value=''>Bedrooms:</option>
            <option value='1+'>1 or more</option>
            <option value='2+'>2 or more</option>
            <option value='3+'>3 or more</option>
            <option value='4+'>4 or more</option>
            <option value='5+'>5 or more</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>How many bathrooms do you need?</h5>
          <Form.Select aria-label="Default select example" name="baths" id="baths">
            <option value=''>Bathrooms:</option>
            <option value='1+'>1 or more</option>
            <option value='1.5+'>1.5 or more</option>
            <option value='2+'>2 or more</option>
            <option value='3+'>3 or more</option>
            <option value='4+'>4 or more</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <h5>What cities/neighboorhoods are you most interested in?</h5>
          <Form.Control type="text" id="city" name="city" placeholder="Seattle/Capital Hill, Seattle/Ballard, Tacoma/North End..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <h5>Anything else I should know about?</h5>
          <Form.Control type="text" id="extraInfo" name="extraInfo" placeholder="I would like my future home to be on a 1/4 acre lot. We are not okay with an HOA fee. Prefer a two car garage. Etc..." />
        </Form.Group>

        <Form.Group className="mb-3">
          <h5>Are you on a timeframe?</h5>
          <Form.Select aria-label="Default select example" name="timeframe" id="timeframe" onChange={timeframeHandler}>
            <option value=''>yes/no</option>
            <option value='Yes'>yes</option>
            <option value='No'>no</option>
          </Form.Select>
        </Form.Group>

        {showTimeframeTextArea && <TimeframeBuyer />}

        <Form.Group className="mb-3" controlId="formBasicText">
          <h5>Your Full Name</h5>
          <Form.Control type="text" name='fullName' id='fullName' placeholder="person@example.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h5>Your Email address</h5>
          <Form.Control type="email" name='email' id='email' placeholder="Jane Doe" />
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
        </Form.Group>

        <Button type="submit" id='buyerButton'>
          Send Details
        </Button>
      </Form>
    </MDBContainer>
  );
}

export default Buyer;
