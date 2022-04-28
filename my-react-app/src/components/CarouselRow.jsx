import { Row, Button } from "react-bootstrap";

import CarouselItem from "./CarouselItem";

const CarouselRow = (props) => {
  return (
    <div>
      <Row>
        {props.movies.map((movie) => {
          return <CarouselItem movie={movie} />;
        })}
      </Row>
    </div>
  );
};

export default CarouselRow;
