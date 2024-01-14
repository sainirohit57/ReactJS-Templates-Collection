import { Navbar, Container } from "react-bootstrap";

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar className="bg-dark">
      <Container className="justify-content-center">
        <Navbar.Brand href="/" className="text-white">
          Notes Taking App Using React TypeScript
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
