import { Alert, Container, Row } from "react-bootstrap";
import { project } from "../Projects";
import SingleProject from "./SingleProject";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <Container className="mt-5">
      <Alert
        variant="warning"
        className="text-center d-flex alignn-items-center justify-content-center animate__shakeX animate__animated"
      >
        <span>
          {" "}
          <span className="me-3 h4 m-0">
            <BsFillExclamationTriangleFill />
          </span>
          Alcuni Progetti potrebbero non funzionare a causa della scadenza degli
          API token
          <span className="ms-3 h4 m-0">
            <BsFillExclamationTriangleFill />
          </span>
        </span>
      </Alert>
      <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center mt-5">
        {project.map((progetto) => (
          <SingleProject progetto={progetto} />
        ))}
      </Row>
    </Container>
  );
};
export default Portfolio;
