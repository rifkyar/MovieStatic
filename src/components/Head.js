import { Col, Container, Row, Button } from 'react-bootstrap';
const Introd = () => {
    return (
        <div className="intro">
            <Container className="text-white d-flex justify-content-center align-items-center text-center">
                <Row>
                    <Col>
                        <div className="tagLine">Watch Movies</div>
                        <div className="tagLine">For Free</div>
                        <div className="introButton mt-4 text-center">
                            <Button variant="secondary" className='btt' href="#trendingCont">Get Started</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Introd;