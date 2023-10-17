import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function Modal(props) {
  const toggleShow = () => props.setBasicModal(!props.basicModal);

  return (
    <>
      {props.modalItem && (
        <MDBModal
          show={props.basicModal}
          setShow={props.setBasicModal}
          tabIndex="-1"
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>{props.modalItem.title}</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <aside>
                  <p>{props.modalItem.address}</p>
                  <p>{props.modalItem.price}</p>  
                  <p>{props.modalItem.type}</p>
                  <p>{props.modalItem.sqft}</p>  
                  <p>{props.modalItem.beds}</p>  
                  <p>{props.modalItem.baths}</p>
                </aside>
                <img src={require("../images/properties/" + props.modalItem.path)} alt='front of house'></img>
              </MDBModalBody>

              <MDBModalFooter>
                <MDBBtn onClick={toggleShow}>Close</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      )}
    </>
  );
}
