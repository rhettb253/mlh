import "./Home.css";
import { useState, useEffect, useCallback } from "react";
import Blurb from "./Blurb";
import GetConnected from "./GetConnected";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import axios from "axios";

function Home() {
  let [loading, setLoading] = useState(false);
  let [state, setState] = useState({
    clientWantsTo: "",
    buyer: {
      fullName: "",
      emailAddress: "",
      isInterestedInAHouse: "",
      isInterestedInATownhome: "",
      isInterestedInACondo: "",
      isInterestedInAMultifamily: "",
      isWillingToSpend: "",
      bedrooms: "",
      bathrooms: "",
      desiredAreaToLive: "",
      extraInformation: "",
      timeframe: "",
    },
    seller: {
      fullName: "",
      emailAddress: "",
      isSellingAHouse: "",
      isSellingATownhome: "",
      isSellingACondo: "",
      isSellingAMultifamily: "",
      believesHomeValueIs: "",
      sqft: "",
      lot: "",
      bedrooms: "",
      bathrooms: "",
      addressOfHome: "",
      extraInformation: "",
      timeframe: "",
    },
  });

  // useEffect(() => {
  //   if (document.getElementById('thankYou')) {
  //     if (document.getElementById('buyerButton')) {
  //       document.getElementById('buyerButton').remove()
  //     } else { document.getElementById('sellerButton').remove() }
  //   }
  // }, [state.buyer, state.seller]);

  const sendEmail = useCallback(
    async (e) => {
      try {
        setLoading(true);

        // hide submit button
        if (document.getElementById("buyerButton")) {
          document.getElementById("buyerButton").style.display = "none";
        } else if (document.getElementById("sellerButton")) {
          document.getElementById("sellerButton").style.display = "none";
        }

        // Make a POST request to your backend API
        const response = await axios.post(
          process.env.REACT_APP_SERVER_URL,
          state,
          { headers: { "Content-Type": "application/json" } }
        );

        // Check the response and show success message
        if (response.status === 200) {
          // add thank you message if email submitted
          if (document.getElementById("warning")) {
            let formWarningEl = document.getElementById("warning");
            formWarningEl.remove();
            let locationTwo =
              document.querySelector(".buyer") ||
              document.querySelector(".seller");
            let thankYouEl = document.createElement("h3");
            thankYouEl.id = "thankYou";
            thankYouEl.style.color = "limegreen";
            thankYouEl.innerText =
              "Thank you for your submission. I look forward to connecting with you soon!";
            locationTwo.appendChild(thankYouEl);
          } else {
            let locationTwo =
              document.querySelector(".buyer") ||
              document.querySelector(".seller");
            let thankYouEl = document.createElement("h3");
            thankYouEl.id = "thankYou";
            thankYouEl.style.color = "limegreen";
            thankYouEl.innerText =
              "Thank you for your submission. I look forward to connecting with you soon!";
            locationTwo.appendChild(thankYouEl);
          }

          // success message
          setLoading(false);
          console.log(response.data);
        }
      } catch (error) {
        setLoading(false);

        // re-show submit button
        if (document.getElementById("buyerButton")) {
          document.getElementById("buyerButton").style.display = "inline-block";
        } else if (document.getElementById("sellerButton")) {
          document.getElementById("sellerButton").style.display = "inline-block";
        }

        // show error
        console.error("Error submitting the form", error);
        alert(
          `Error, ${error.message}.\nEmail not sent, please refresh and try again.`
        );
      }
    },
    [state]
  );

  useEffect(() => {
    if (
      (state.buyer && state.buyer.bathrooms) ||
      (state.seller && state.seller.bathrooms)
    ) {
      sendEmail();
    }
  }, [state.buyer, state.seller, sendEmail]);

  function changeClientWants(buysell) {
    setState({
      clientWantsTo: buysell,
    });
  }

  // Warning, I created this logic when I first learned JS,the
  // below functions should be made more efficient and less
  // monolitihc, since they work I decided to leave them as
  // they are because the size of the application is small
  // enough it won't be an issue.

  function updateBuyerInfo(event) {
    event.preventDefault();
    if (
      event.target.fullName.value === "" ||
      event.target.email.value === "" ||
      event.target.price.value === "" ||
      event.target.beds.value === "" ||
      event.target.baths.value === "" ||
      event.target.city.value === "" ||
      event.target.timeframe.value === ""
    ) {
      if (!document.getElementById("warning")) {
        let location = document.querySelector(".buyer");
        let formWarningEl = document.createElement("h3");
        formWarningEl.id = "warning";
        formWarningEl.style.color = "red";
        formWarningEl.innerText =
          "Please review the form and fill in any missing information.";
        location.appendChild(formWarningEl);
      } else {
        document.getElementById("warning").innerText =
          "Please review the form as there is still missing information.";
      }
    } else if (event.target.timeframeTextArea) {
      setState({
        clientWantsTo: "buy",
        buyer: {
          fullName: event.target.fullName.value,
          emailAddress: event.target.email.value,
          isInterestedInAHouse: event.target.house.checked ? "Yes" : "No",
          isInterestedInATownhome: event.target.townhome.checked ? "Yes" : "No",
          isInterestedInACondo: event.target.condo.checked ? "Yes" : "No",
          isInterestedInAMultifamily: event.target.multifamily.checked
            ? "Yes"
            : "No",
          isWillingToSpend: event.target.price.value,
          bedrooms: event.target.beds.value,
          bathrooms: event.target.baths.value,
          desiredAreaToLive: event.target.city.value,
          extraInformation: event.target.extraInfo.value,
          timeframe: event.target.timeframe.value,
          timeframeInfo: event.target.timeframeTextArea.value,
        },
      });
    } else {
      setState({
        clientWantsTo: "buy",
        buyer: {
          fullName: event.target.fullName.value,
          emailAddress: event.target.email.value,
          isInterestedInAHouse: event.target.house.checked ? "Yes" : "No",
          isInterestedInATownhome: event.target.townhome.checked ? "Yes" : "No",
          isInterestedInACondo: event.target.condo.checked ? "Yes" : "No",
          isInterestedInAMultifamily: event.target.multifamily.checked
            ? "Yes"
            : "No",
          isWillingToSpend: event.target.price.value,
          bedrooms: event.target.beds.value,
          bathrooms: event.target.baths.value,
          desiredAreaToLive: event.target.city.value,
          extraInformation: event.target.extraInfo.value,
          timeframe: event.target.timeframe.value,
        },
      });
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
      event.target.timeframe.value === ""
    ) {
      if (!document.getElementById("warning")) {
        let location = document.querySelector(".seller");
        let formWarningEl = document.createElement("h3");
        formWarningEl.id = "warning";
        formWarningEl.style.color = "red";
        formWarningEl.innerText =
          "Please review the form and fill in any missing information.";
        location.appendChild(formWarningEl);
      } else {
        document.getElementById("warning").innerText =
          "Please review the form as there is still missing information.";
      }
    } else if (event.target.timeframeTextArea) {
      setState({
        clientWantsTo: "sell",
        seller: {
          fullName: event.target.fullName.value,
          emailAddress: event.target.email.value,
          isSellingAHouse: event.target.house.checked ? "Yes" : "No",
          isSellingATownhome: event.target.townhome.checked ? "Yes" : "No",
          isSellingACondo: event.target.condo.checked ? "Yes" : "No",
          isSellingAMultifamily: event.target.multifamily.checked
            ? "Yes"
            : "No",
          believesHomeValueIs: event.target.price.value,
          sqft: event.target.sqft.value,
          lot: event.target.lot.value,
          bedrooms: event.target.beds.value,
          bathrooms: event.target.baths.value,
          addressOfHome:
            event.target.streetaddress.value +
            " " +
            event.target.sellCity.value +
            " WA " +
            event.target.zip.value,
          extraInformation: event.target.extraInfo.value,
          timeframe: event.target.timeframe.value,
          timeframeInfo: event.target.timeframeTextArea.value,
        },
      });
    } else {
      setState({
        clientWantsTo: "sell",
        seller: {
          fullName: event.target.fullName.value,
          emailAddress: event.target.email.value,
          isSellingAHouse: event.target.house.checked ? "Yes" : "No",
          isSellingATownhome: event.target.townhome.checked ? "Yes" : "No",
          isSellingACondo: event.target.condo.checked ? "Yes" : "No",
          isSellingAMultifamily: event.target.multifamily.checked
            ? "Yes"
            : "No",
          believesHomeValueIs: event.target.price.value,
          sqft: event.target.sqft.value,
          lot: event.target.lot.value,
          bedrooms: event.target.beds.value,
          bathrooms: event.target.baths.value,
          addressOfHome:
            event.target.streetaddress.value +
            " " +
            event.target.sellCity.value +
            " " +
            event.target.zip.value,
          extraInformation: event.target.extraInfo.value,
          timeframe: event.target.timeframe.value,
        },
      });
    }
  }

  return (
    <MDBContainer className="home">
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
          updateSellerInfo={updateSellerInfo}
          loading={loading}
        />
      </MDBRow>
    </MDBContainer>
  );
}

export default Home;
