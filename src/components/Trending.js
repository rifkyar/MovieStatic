import { Card, ListGroupItem, ListGroup, Container, Row, Col } from 'react-bootstrap';
import imageDune from "../assets/images/trending/dune.jpg";
import imageJoker from "../assets/images/trending/joker.jpg";
import imageEverything from "../assets/images/trending/everything.jpg";
const divStyle = {
    float: 'right'
}
const Trend = () => {
    return (
        <Container id="trendingCont">
            <br />
            <h1 className='text-center text-white'>Trending Movies</h1>
            <Row>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }} className="marginCard mx-auto">
                        <Card.Img variant="top" src={imageDune} />
                        <Card.Body className='bg-dark text-white'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card >
                </Col>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }} className="marginCard mx-auto">
                        <Card.Img variant="top" src={imageJoker} />
                        <Card.Body className='bg-dark text-white'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card >
                </Col>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }} className="marginCard mx-auto">
                        <Card.Img variant="top" src={imageEverything} />
                        <Card.Body className='bg-dark text-white'>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card >
                </Col>
            </Row>
        </Container >

    )
}
export default Trend;