import "./PrevTrans.css";
import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";
import soldArray from "../soldArray.json";
import Modal from "./modal";

function PrevTrans() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <MDBContainer className="prevtrans">
      <h2>Previous Transactions</h2>
      <div>
        {soldArray.map((property, idx) => (
          <MDBBtn onClick={toggleShow} color="translucent" style={{borderRadius: "35%", boxShadow: "none"}}>
            <MDBCard
              key={idx}
              style={{ width: "18rem", borderRadius: "35%" }}
              classname="card"
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardBody>
                  <MDBCardTitle>{property.title}</MDBCardTitle>
                  <MDBCardText className="mb-2 text-muted">
                    {property.address.split(" ").splice(1).join(" ")}
                  </MDBCardText>
                  <MDBCardImage
                    src={require("../images/properties/" + property.path)}
                  />
                </MDBCardBody>
              </MDBRipple>
            </MDBCard>
          </MDBBtn>
        ))}
      </div>
      <Modal
        basicModal={basicModal}
        setBasicModal={setBasicModal}
        property={MDBCard.key}
      />
    </MDBContainer>
  );
}

export default PrevTrans;
