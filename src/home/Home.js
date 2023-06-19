import './Home.css';
import { useState, useEffect } from 'react';
import Blurb from './Blurb';
import GetConnected from './GetConnected';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';


function Home() {

  let [state, setState] = useState({
    clientWantsTo: '',
    buyer: {
      fullName: '',
      emailAddress: '',
      isInterestedInAHouse: '',
      isInterestedInATownhome: '',
      isInterestedInACondo: '',
      isInterestedInAMultifamily: '',
      isWillingToSpend: '',
      bedrooms: '',
      bathrooms: '',
      desiredAreaToLive: '',
      extraInformation: '',
      timeframe: ''
    },
    seller: {
      fullName: '',
      emailAddress: '',
      isSellingAHouse: '',
      isSellingATownhome: '',
      isSellingACondo: '',
      isSellingAMultifamily: '',
      believesHomeValueIs: '',
      sqft: '',
      lot: '',
      bedrooms: '',
      bathrooms: '',
      addressOfHome: '',
      extraInformation: '',
      timeframe: ''
    }
  })

  useEffect(() => {
    if (document.getElementById('thankYou')) {
      if (document.getElementById('buyerButton')) {
        document.getElementById('buyerButton').remove()
      } else { document.getElementById('sellerButton').remove() }
    }
  }
  );

  function changeClientWants(buysell) {
      setState({
        clientWantsTo: buysell
      })
  }

  function updateBuyerInfo(event) {
    event.preventDefault();
    if (
      event.target.fullName.value === "" ||
      event.target.email.value === "" ||
      event.target.price.value === "" ||
      event.target.beds.value === "" ||
      event.target.baths.value === "" ||
      event.target.city.value === "" ||
      event.target.timeframe.value === "") {
      if (!document.getElementById('warning')) {
        let location = document.querySelector('.buyer');
        let formWarningEl = document.createElement('h3');
        formWarningEl.id = 'warning';
        formWarningEl.innerText = 'Please review the form and fill in any missing information.';
        location.appendChild(formWarningEl);
      } else {
        document.getElementById('warning').innerText = 'Please review the form as there is still missing information.';
      }
    } else if (event.target.timeframeTextArea) {
      setState({
        clientWantsTo: 'buy',
        buyer: {
          fullName: event.target.fullName.value,
          emailAddress: event.target.email.value,
          isInterestedInAHouse: event.target.house.checked ? 'Yes' : 'No',
          isInterestedInATownhome: event.target.townhome.checked ? 'Yes' : 'No',
          isInterestedInACondo: event.target.condo.checked ? 'Yes' : 'No',
          isInterestedInAMultifamily: event.target.multifamily.checked ? 'Yes' : 'No',
          isWillingToSpend: event.target.price.value,
          bedrooms: event.target.beds.value,
          bathrooms: event.target.baths.value,
          desiredAreaToLive: event.target.city.value,
          extraInformation: event.target.extraInfo.value,
          timeframe: event.target.timeframe.value,
          timeframeInfo: event.target.timeframeTextArea.value
        }
      });
      if (document.getElementById('warning')) {
        let formWarningEl = document.getElementById('warning');
        formWarningEl.remove();
        let locationTwo = document.querySelector('.buyer');
        let thankYouEl = document.createElement('h3');
        thankYouEl.id = 'thankYou';
        thankYouEl.innerText = 'Thank you for your submission. I look forward to connecting with you soon!';
        locationTwo.appendChild(thankYouEl);
      } else {
        let locationTwo = document.querySelector('.buyer');
        let thankYouEl = document.createElement('h3');
        thankYouEl.id = 'thankYou';
        thankYouEl.innerText = 'Thank you for your submission. I look forward to connecting with you soon!';
        locationTwo.appendChild(thankYouEl);
      }
    } else {
      setState({
        clientWantsTo: 'buy',
        buyer: {
          fullName: event.target.fullName.value,
          emailAddress: event.target.email.value,
          isInterestedInAHouse: event.target.house.checked ? 'Yes' : 'No',
          isInterestedInATownhome: event.target.townhome.checked ? 'Yes' : 'No',
          isInterestedInACondo: event.target.condo.checked ? 'Yes' : 'No',
          isInterestedInAMultifamily: event.target.multifamily.checked ? 'Yes' : 'No',
          isWillingToSpend: event.target.price.value,
          bedrooms: event.target.beds.value,
          bathrooms: event.target.baths.value,
          desiredAreaToLive: event.target.city.value,
          extraInformation: event.target.extraInfo.value,
          timeframe: event.target.timeframe.value
        }
      });
      if (document.getElementById('warning')) {
        let formWarningEl = document.getElementById('warning');
        formWarningEl.remove();
        let locationTwo = document.querySelector('.buyer');
        let thankYouEl = document.createElement('h3');
        thankYouEl.id = 'thankYou';
        thankYouEl.innerText = 'Thank you for your submission. I look forward to connecting with you soon!';
        locationTwo.appendChild(thankYouEl);
      } else {
        let locationTwo = document.querySelector('.buyer');
        let thankYouEl = document.createElement('h3');
        thankYouEl.id = 'thankYou';
        thankYouEl.innerText = 'Thank you for your submission. I look forward to connecting with you soon!';
        locationTwo.appendChild(thankYouEl);
      }
    }
  }

  function updateSellerInfo(event) {
    event.preventDefault();
    if (
      event.target.fullName.value === "" ||
      event.target.email.value === "" ||
      event.target.price.value === "" ||
      event.target.beds.value === "" ||
      event.target.baths.value === "" ||
      event.target.sellCity.value === "" ||
      event.target.timeframe.value === "") {
      if (!document.getElementById('warning')) {
        let location = document.querySelector('.seller');
        let formWarningEl = document.createElement('h3');
        formWarningEl.id = 'warning';
        formWarningEl.innerText = 'Please review the form and fill in any missing information.';
        location.appendChild(formWarningEl);
      } else {
        document.getElementById('warning').innerText = 'Please review the form as there is still missing information.';
      }
    } else if (event.target.timeframeTextArea) {
      setState({
        clientWantsTo: 'sell',
        seller: {
          fullName: event.target.fullName.value,
          emailAddress: event.target.email.value,
          isSellingAHouse: event.target.house.checked ? 'Yes' : 'No',
          isSellingATownhome: event.target.townhome.checked ? 'Yes' : 'No',
          isSellingACondo: event.target.condo.checked ? 'Yes' : 'No',
          isSellingAMultifamily: event.target.multifamily.checked ? 'Yes' : 'No',
          believesHomeValueIs: event.target.price.value,
          sqft: event.target.sqft.value,
          lot: event.target.lot.value,
          bedrooms: event.target.beds.value,
          bathrooms: event.target.baths.value,
          addressOfHome: event.target.streetaddress.value + " " + event.target.sellCity.value + " WA " + event.target.zip.value,
          extraInformation: event.target.extraInfo.value,
          timeframe: event.target.timeframe.value,
          timeframeInfo: event.target.timeframeTextArea.value
        }
      });
      if (document.getElementById('warning')) {
        let formWarningEl = document.getElementById('warning');
        formWarningEl.remove();
        let locationTwo = document.querySelector('.seller');
        let thankYouEl = document.createElement('h3');
        thankYouEl.id = 'thankYou';
        thankYouEl.innerText = 'Thank you for your submission. I look forward to connecting with you soon!';
        locationTwo.appendChild(thankYouEl);
      } else {
        let locationTwo = document.querySelector('.seller');
        let thankYouEl = document.createElement('h3');
        thankYouEl.id = 'thankYou';
        thankYouEl.innerText = 'Thank you for your submission. I look forward to connecting with you soon!';
        locationTwo.appendChild(thankYouEl);
      }
    } else {
      setState({
        clientWantsTo: 'sell',
        seller: {
          fullName: event.target.fullName.value,
          emailAddress: event.target.email.value,
          isSellingAHouse: event.target.house.checked ? 'Yes' : 'No',
          isSellingATownhome: event.target.townhome.checked ? 'Yes' : 'No',
          isSellingACondo: event.target.condo.checked ? 'Yes' : 'No',
          isSellingAMultifamily: event.target.multifamily.checked ? 'Yes' : 'No',
          believesHomeValueIs: event.target.price.value,
          sqft: event.target.sqft.value,
          lot: event.target.lot.value,
          bedrooms: event.target.beds.value,
          bathrooms: event.target.baths.value,
          addressOfHome: event.target.streetaddress.value + " " + event.target.sellCity.value + " " + event.target.zip.value,
          extraInformation: event.target.extraInfo.value,
          timeframe: event.target.timeframe.value,
        }
      });
      if (document.getElementById('warning')) {
        let formWarningEl = document.getElementById('warning');
        formWarningEl.remove();
        let locationTwo = document.querySelector('.seller');
        let thankYouEl = document.createElement('h3');
        thankYouEl.id = 'thankYou';
        thankYouEl.innerText = 'Thank you for your submission. I look forward to connecting with you soon!';
        locationTwo.appendChild(thankYouEl);
      } else {
        let locationTwo = document.querySelector('.seller');
        let thankYouEl = document.createElement('h3');
        thankYouEl.id = 'thankYou';
        thankYouEl.innerText = 'Thank you for your submission. I look forward to connecting with you soon!';
        locationTwo.appendChild(thankYouEl);
      }
    }
  }

  return (
    <MDBContainer className='home'>
      <MDBRow>
        <Blurb />
      </MDBRow>
      <MDBRow>
        <GetConnected
          clientWantsTo={state.clientWantsTo}
          onChange={changeClientWants}
          buyerInfo={state.buyer}
          updateBuyerInfo={updateBuyerInfo}
          sellerInfo={state.seller}
          updateSellerInfo={updateSellerInfo} />
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;