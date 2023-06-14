import './Home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  // MDBRow,
  // MDBCol,
  // MDBInput,
  MDBContainer
} from 'mdb-react-ui-kit';

function Buyer(props) {
  function timeframeHandler(event) {
    if (event.target.value === 'Yes') {
      let timeframeLocation = document.getElementById('timeframeDiv');
      let newHeaderEl = document.createElement('h6');
      let newTextEl = document.createElement('textarea');
      newHeaderEl.id = 'textAreaLabel';
      newHeaderEl.innerText = 'Tell me about your timeframe:';
      newHeaderEl.style.marginLeft = '2rem';
      newTextEl.id = 'timeframeTextArea';
      newTextEl.placeholder = "I will be moving up to Washington on the 27th and once I am there I will have accomodations for another month.";
      timeframeLocation.appendChild(newHeaderEl);
      timeframeLocation.appendChild(newTextEl);
    }
    else if (event.target.value === 'No' && document.getElementById('timeframeTextArea')) {
      let textEl = document.getElementById('timeframeTextArea');
      let headerEl = document.getElementById('textAreaLabel');
      headerEl.remove();
      textEl.remove();
    }
  }
  return (

    <MDBContainer className='buyer my-5'>
      <h3 className="question2">Please tell me what are you looking for in your next home:</h3>
      <hr />
      <h5>What type of home are you interested in?</h5>
      <Form id="buyerform" onSubmit={props.newBuyerHandler}>
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

        <Button variant="primary" type="submit" id='buyerButton'>
          Submit
        </Button>
      </Form>
    </MDBContainer>
  );
}

export default Buyer;

{/* <div>
            <h4>What type(s) of home(s) are you interested in?</h4>
            <input type='checkbox' id='house' name='house' value='house' />
            <label htmlFor='house'>House</label>
            <input type='checkbox' id='townhome' name='townhome' value='townhome' />
            <label htmlFor='townhome'>Townhome</label>
            <input type='checkbox' id='condo' name='condo' value='condo' />
            <label htmlFor='condo'>Condo</label>
            <input type='checkbox' id='multifamily' name='multifamily' value='multifamily' />
            <label htmlFor='multifamily'>Multi-family</label>
          </div>
          <div>
            <label htmlFor="price">Home Price:</label>
            <select name="price" id="price">
              <option value=''>How much are you willing to spend?</option>
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
            </select>
          </div>
          <div>
            <label htmlFor="beds">Bedrooms:</label>
            <select name="beds" id="beds">
              <option value=''>How many bedrooms do you need?</option>
              <option value='1+'>1 or more</option>
              <option value='2+'>2 or more</option>
              <option value='3+'>3 or more</option>
              <option value='4+'>4 or more</option>
              <option value='5+'>5 or more</option>
            </select>
          </div>
          <div>
            <label htmlFor="baths">Bathrooms:</label>
            <select name="baths" id="baths">
              <option value=''>How many bathrooms do you need?</option>
              <option value='1+'>1 or more</option>
              <option value='1.5+'>1.5 or more</option>
              <option value='2+'>2 or more</option>
              <option value='3+'>3 or more</option>
              <option value='4+'>4 or more</option>
            </select>
          </div>
          <div>
            <h4>What cities/neighboorhoods are you most interested in?</h4>
            <input type='text' name='city' id='city' placeholder='Seattle/Capital Hill, Seattle/Ballard, Tacoma/North End...' />
          </div>
          <div>
            <h4>Anything else I should know about?</h4>
            <textarea id="extraInfo" name="extraInfo" placeholder="I would like my future home to be on a 1/4 acre lot. We are not okay with an HOA fee. Prefer a two car garage. Etc..."></textarea>
          </div>
          <div id='timeframeDiv'>
            <label htmlFor="timeframe">Are you on a timeframe?</label>
            <select name="timeframe" id="timeframe" onChange={timeframeHandler}>
              <option value=''>yes/no</option>
              <option value='Yes'>yes</option>
              <option value='No'>no</option>
            </select>
          </div>
          <div>
            <label htmlFor='fullName'>Your Full Name:</label>
            <input type='text' name='fullName' id='fullName' placeholder='John Smith' />
          </div>
          <div>
            <label htmlFor='email'>Your Email:</label>
            <input type='email' name='email' id='email' placeholder='johnsmith@gmail.com' />
          </div>
          <button id='buyerButton' type='submit'>Send Details</button> */}