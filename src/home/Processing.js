import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function Processing() {
  return (
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Sending... This could take a second.
    </Button>
  );
}

export default Processing;
