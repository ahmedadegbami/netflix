import { Component } from "react";
import {Row} from 'react-bootstrap'
import CarouselItem from "./CarouselItem";

class CarouselRow extends Component {

    render() {


        return(

            <Row>
      <CarouselItem movie={this.props.movie} />
      <CarouselItem movie={this.props.movie} />
      <CarouselItem movie={this.props.movie} />
      <CarouselItem movie={this.props.movie} />
      <CarouselItem movie={this.props.movie} />
      <CarouselItem movie={this.props.movie} />
     

      </Row>


        )
    }
}

export default CarouselRow