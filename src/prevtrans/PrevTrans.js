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
  const [modalItem, setModalItem] = useState();
  const toggleShow = (e) => {
    setModalItem(() => {
      let index = Number(e.target.id);
      return soldArray[index];
    });
    setBasicModal(!basicModal);
  };

  return (
    <MDBContainer className="prevtrans">
      <h2>Previous Transactions</h2>
      <div>
        {soldArray.map((property, idx) => (
          <MDBBtn onClick={toggleShow} key={idx} id={idx} color="translucent" style={{borderRadius: "35%", boxShadow: "none"}}>
            <MDBCard
              id={idx}
              style={{ width: "18rem", borderRadius: "35%" }}
              // className="card"
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardBody id={idx}>
                  <MDBCardTitle id={idx}>{property.title}</MDBCardTitle>
                  <MDBCardText id={idx} className="mb-2 text-muted">
                    {property.address.split(" ").splice(1).join(" ")}
                  </MDBCardText>
                  <MDBCardImage
                    id={idx}
                    src={require("../images/properties/" + property.path)}
                    alt='front of house'
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
        modalItem={modalItem}
      />
    </MDBContainer>
  );
}

export default PrevTrans;
