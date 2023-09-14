import { Col, Container, Row, Button } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import profilo from "../mia-foto-tagliata.png";
import CV from "../Domenico_Dattilo_CV.pdf";
import talentoDay from "../test_talentoday.pdf";

const HomePage = () => {
  const phrases = [
    "Front-end Developer",
    "Back-end Developer",
    "Full-stack Developer",
  ];
  const handleDownloadTalentoDay = () => {
    const a = document.createElement("a");
    a.href = talentoDay;
    a.download = "test_talentoDay.pdf";
    a.click();
  };
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = CV;
    a.download = "Domenico_Dattilo_CV.pdf";
    a.click();
  };
  return (
    <Container
      fluid
      className="h-100 w-100 d-flex align-items-center justify-content-center gap-5 home-display text-white"
    >
      <Row className="justify-content-center w-100">
        <Col
          xs={10}
          md={6}
          xl={5}
          className="align-items-center d-flex flex-column justify-content-center order-1 order-md-0"
        >
          <p className="display-4 fw-bold text-center animate__animated animate__rubberBand">
            Domenico Dattilo
          </p>
          <div className="h2 text-center">
            <span>I'm a </span>
            <ReactTypingEffect text={phrases} className="text-azzurro" />
          </div>
          <div className="w-100 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-evenly my-3">
            <Button
              onClick={handleDownload}
              type="submit"
              className="bg-giallo text-blu fw-bold"
            >
              Download CV
            </Button>
            <Button onClick={handleDownloadTalentoDay} className="bg-azzurro">
              Test Attitudinale Talentoday
            </Button>
          </div>
        </Col>
        <Col
          xs={10}
          md={4}
          lg={3}
          xl={2}
          className="d-flex justify-content-center order-0 order-md-1"
        >
          <img
            src={profilo}
            alt="immagine profilo"
            className="img-profilo mb-4 mb-md-0"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
