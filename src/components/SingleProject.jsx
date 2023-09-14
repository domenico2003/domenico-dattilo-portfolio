import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
// style={{ backgroundImage: `url(${progetto.img})` }}
const SingleProject = ({ progetto }) => {
  const [hover, setHover] = useState(false);
  return (
    <Col className="">
      <Card
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="bg-dark  mb-4 progetto-card text-azzurro position-relative rounded-4 border-0 animate__flipInX animate__animated"
        style={{ backgroundImage: `url(${progetto.img})` }}
      >
        {" "}
        {hover && <div className="sfondo-opaco rounded-4"></div>}
        <Card.ImgOverlay
          className={`d-flex align-items-end justify-content-center testo-card  ${
            hover ? "text-white " : "text-yellow "
          }`}
        >
          <div className="d-flex flex-column align-items-center">
            <Card.Title className="text-center">{progetto.nome}</Card.Title>
            <Card.Text className="pb-3">{progetto.descrizione}</Card.Text>
            <a
              href={progetto.linkRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline-warning"
                className={`${
                  hover
                    ? "bottone-visualizza show animate__fadeInUp animate__animated"
                    : "bottone-visualizza "
                } text-center `}
              >
                {" "}
                Git Hub
              </Button>
            </a>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default SingleProject;
