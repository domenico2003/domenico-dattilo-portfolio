import { Container } from "react-bootstrap";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-dark d-flex justify-content-center footer  fixed-bottom"
    >
      <div className="w-25 d-flex justify-content-center gap-4 mt-4 mb-4">
        <a
          href="https://www.linkedin.com/in/domenico-dattilo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="h2  icone" />
        </a>
        <a
          href="https://github.com/domenico2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="h2  icone" />
        </a>
        <a href="mailto:domdat03@gmail.com">
          <IoMdMail className="h2  icone" />
        </a>
      </div>
    </Container>
  );
};
export default Footer;
