import { Card, Button, Container, Row, Col } from "react-bootstrap";

const MoviesDetails = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesDetails;
