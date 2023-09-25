import "./PrevTrans.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBContainer,
} from "mdb-react-ui-kit";
import soldArray from "../soldArray.json";

function PrevTrans() {
  return (
    <MDBContainer className="prevtrans">
      <h2>Previous Transactions</h2>
      <div>
        {soldArray.map((property, idx) => (
          <MDBCard key={idx} style={{ width: "18rem", backgroundColor: "rgb(230, 229, 225)" }} className="card">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardText className="mb-2 text-muted">
                  {property.address}
                </MDBCardText>
                <MDBCardImage
                  src={require("../images/properties/" + property.path)}
                />
              </MDBCardBody>
            </MDBRipple>
          </MDBCard>
        ))}
      </div>
    </MDBContainer>
  );
}

export default PrevTrans;
