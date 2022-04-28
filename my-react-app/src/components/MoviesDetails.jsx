import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MoviesDetails = (props) => {
  const param = useParams();
  console.log(param);

  const [moviesDetails, setMoviesDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=6e593066&i=" + param.movieID
      );
      if (response.ok) {
        const body = await response.json();
        console.log(body);

        // this.setState({
        //   movies: body.Search,
        // });
        setMoviesDetails(body);
      } else {
        console.log("problem while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={3}>
          {moviesDetails && (
            <Card>
              <Card.Img variant="top" src={moviesDetails.Poster} />
              <Card.Body>
                <Card.Title>{moviesDetails.Title}</Card.Title>
                <Card.Text>{moviesDetails.Plot}</Card.Text>

                <Link to="/">
                  <Button variant="primary">Go Back</Button>
                </Link>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesDetails;
