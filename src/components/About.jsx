import ImmagineMovibile from "./ImmagineMovibile";
import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/bootstrap.png";
import js from "../images/js.png";
import react from "../images/react.png";
import redux from "../images/redux.png";
import sass from "../images/sass.png";
import spring from "../images/spring-original.svg";
import java from "../images/java.svg";
import postgresql from "../images/postgresql.svg";
import postman from "../images/postman.svg";
import wordpress from "../images/wordpress.png";

import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
const About = () => {
  return (
    <>
      <Container className="mt-5 container-about d-flex align-items-center">
        <Row xs={1} md={2} className=" justify-content-around">
          <Col xl={4} className="mb-4 mb-md-0">
            {" "}
            <p class="text-center text-yellow h3 animate__animated animate__zoomInDown">
              <span className="letter">A</span>
              <span className="letter">B</span>
              <span className="letter">O</span>
              <span className="letter">U</span>
              <span className="letter me-3">T </span>

              <span className="letter"> M</span>
              <span className="letter">E</span>
            </p>
            <p className="text-light text-start animate__animated animate__backInLeft">
              Salve, mi chiamo{" "}
              <span className="fw-bold  text-azzurro text-decoration-underline">
                Domenico Dattilo
              </span>{" "}
              ho{" "}
              <span className="fw-bold  text-azzurro text-decoration-underline">
                20 anni
              </span>{" "}
              e sono nato a{" "}
              <span className="fw-bold  text-azzurro text-decoration-underline">
                Siderno
              </span>{" "}
              un piccolo paesino{" "}
              <span className="fw-bold  text-azzurro text-decoration-underline">
                in provincia di Reggio Calabria
              </span>
              . Da poco sono diventato un{" "}
              <span className="fw-bold  text-azzurro text-decoration-underline">
                full stack web developer
              </span>{" "}
              grazie al corso di
              <span className="fw-bold  text-azzurro text-decoration-underline ms-1">
                Epicode
              </span>{" "}
              frequentato da fine Gennaio 2023 a fine Luglio 2023. Prima di
              questo corso mi sono diplomato nella scuola alberghiera Dea
              Persefone di Locri settore cucina con{" "}
              <span className="fw-bold  text-azzurro text-decoration-underline">
                voto 88
              </span>
              . dopo due esperienze stagionali in pasticceria ho capito che
              questo lavoro non faceva per me, subito dopo ho conosciuto Epicode
              e{" "}
              <span className="fw-bold  text-azzurro text-decoration-underline">
                mi sono appassionato allo sviluppo web.
              </span>
            </p>
          </Col>
          <Col>
            <p class="text-center text-yellow h3 animate__animated animate__zoomInDown">
              <span className="letter">T</span>
              <span className="letter">E</span>
              <span className="letter">C</span>

              <span className="letter me-3">H </span>

              <span className="letter">S</span>
              <span className="letter"> K</span>
              <span className="letter">I</span>
              <span className="letter">L</span>
              <span className="letter">L</span>
              <span className="letter">S</span>
            </p>
            <Row xs={2} md={3} lg={4} className="">
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={css} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={html} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={js} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={bootstrap} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={sass} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={react} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={redux} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={spring} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={java} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={postgresql} />
              </Col>
              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={postman} />
              </Col>

              <Col className="text-center animate__zoomIn animate__animated">
                <ImmagineMovibile url={wordpress} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
