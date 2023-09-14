import { useForm } from "@formspree/react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Footer from "./Footer";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [oggetto, setOggetto] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [risultato, setRisultato] = useState(false);
  const [state, handleSubmit] = useForm("mnqkvoll");
  useEffect(() => {
    if (
      state.result !== null &&
      state.result.kind === "success" &&
      risultato === false
    ) {
      setSuccess(true);
      setEmail("");
      setMessaggio("");
      setNome("");
      setOggetto("");
      setRisultato(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2500);
    }
  }, [state]);

  return (
    <>
      {" "}
      <Container className=" mt-5 mb-5 pb-5  contactContent">
        <p class="text-center text-yellow h3">
          <span className="letter">C</span>
          <span className="letter">O</span>
          <span className="letter">N</span>
          <span className="letter">T</span>
          <span className="letter">A</span>
          <span className="letter">C</span>
          <span className="letter me-3">T </span>

          <span className="letter"> M</span>
          <span className="letter">E</span>
        </p>

        <Row className=" mt-4">
          <Col md={6}>
            <div className="h-100 mb-3">
              <div id="gmap-canvas" className="h-100">
                <iframe
                  title="mappa"
                  className="w-100 h-100 "
                  frameborder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=Siderno,+RC,+Italia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <Form onSubmit={handleSubmit} className="mt-3 mt-md-0">
              <Form.Control
                type="text"
                id="nome"
                name="da"
                value={nome}
                required
                disabled={risultato}
                onChange={(e) => setNome(e.target.value)}
                class="form-control form-control-lg"
                placeholder="Nome e cognome"
              />
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={email}
                required
                disabled={risultato}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mt-3"
                placeholder="Email"
              />
              <Form.Control
                type="text"
                className="form-control mt-3"
                placeholder="Oggetto"
                required
                id="oggetto"
                name="Oggetto"
                value={oggetto}
                disabled={risultato}
                onChange={(e) => setOggetto(e.target.value)}
              />
              <div class="mb-3 mt-3">
                <Form.Control
                  as="textarea"
                  className="form-control"
                  required
                  disabled={risultato}
                  rows="5"
                  id="comment"
                  name="messaggio"
                  placeholder="Messaggio"
                  value={messaggio}
                  onChange={(e) => setMessaggio(e.target.value)}
                ></Form.Control>
              </div>

              <Button
                type="submit"
                className="bg-giallo text-blu fw-bold"
                class=" mt-3"
              >
                Contattami
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
      {success && (
        <Modal show={success} className="rounded">
          <Modal.Header className="bg-blu text-white rounded-top justify-content-center bordo-modale">
            <Modal.Title className="text-center">Email inviata</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-blu rounded-bottom text-white">
            Il tuo messaggio è stato recapitato con successo!
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default Contact;
