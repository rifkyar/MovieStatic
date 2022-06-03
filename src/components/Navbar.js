import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap"
import image from "../assets/images/logo.svg"
const Navibar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand ><img src={image} width="50"
                    height="50"
                    className="d-inline-block align-top"></img></Navbar.Brand>
                <Nav>
                    <Nav.Link href="#trendingCont">Trending</Nav.Link>
                    <Nav.Link href="#superHeroCont">Super Hero</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navibar