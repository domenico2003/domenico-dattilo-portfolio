import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../portfolio-logo.svg";

const MyNavbar = () => {
  const location = useLocation();

  return (
    <Navbar data-bs-theme="dark" expand="md" sticky="top ">
      <Container>
        <Link to={"/"} className="navbar-brand text-light">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-3 "
            alt="logo"
          />
          Domenico Dattilo
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar className="ms-auto d-flex d-sm-block flex-column align-items-center gap-3">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "mx-3 text-yellow fw-bold text-decoration-underline"
                  : "mx-3 text-white text-decoration-none"
              }
            >
              Home
            </Link>

            <Link
              to="/about-me"
              className={
                location.pathname === "/about-me"
                  ? "mx-3 text-yellow fw-bold text-decoration-underline"
                  : "mx-3 text-white text-decoration-none"
              }
            >
              About me
            </Link>
            <Link
              to="/portfolio"
              className={
                location.pathname === "/portfolio"
                  ? "mx-3 text-yellow fw-bold text-decoration-underline"
                  : "mx-3 text-white text-decoration-none"
              }
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              className={
                location.pathname === "/contact"
                  ? "mx-3 text-yellow fw-bold text-decoration-underline"
                  : "mx-3 text-white text-decoration-none"
              }
            >
              Contact
            </Link>
          </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
