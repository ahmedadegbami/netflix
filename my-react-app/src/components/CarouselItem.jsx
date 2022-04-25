import { Component } from "react";
import {Col, Card} from 'react-bootstrap'

class CarouselItem extends Component {

    render() {

        return(

            <Col md={2}>
        <Card>
          <img
            src={this.props.movie.Poster}
            className="card-img-top"
            alt="..."
          />
        </Card>
    </Col>
        )
    }
}

export default CarouselItem