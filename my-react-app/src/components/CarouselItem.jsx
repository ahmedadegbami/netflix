import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CarouselItem = (props) => {
  return (
    <Col col={2}>
      <Card>
        <img
          width="200px"
          height="500px"
          src={props.movie.Poster}
          className="card-img-top"
          alt="..."
        />
        <Link to={"/details/" + props.movie.imdbID}>
          <Button>View</Button>
        </Link>
      </Card>
    </Col>
  );
};

export default CarouselItem;
