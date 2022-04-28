import { useState, useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import CarouselRow from "./CarouselRow";

const MyCarousel = (props) => {
  // state = {
  //   movies: [],
  //   activeSlide: 0,
  // };

  const [movies, setMovies] = useState([]);
  const [activeSlide, SetActiveSlide] = useState(0);

  // componentDidMount = () => {
  //   this.fetchData();
  // };

  useEffect(() => {
    fetchData();
  }, []);

  const changeSlide = (selected) => {
    // this.setState({ activeSlide: selected });
    SetActiveSlide(selected);
  };

  const fetchData = async () => {
    try {
      const selectedMovie = props.movie;

      const response = await fetch(
        "http://www.omdbapi.com/?apikey=6e593066&s=" + selectedMovie
      );
      if (response.ok) {
        const body = await response.json();
        console.log(body);

        // this.setState({
        //   movies: body.Search,
        // });
        setMovies(body.Search);
      } else {
        console.log("problem while fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>{props.heading}</h2>

      <div>
        <Carousel
          // activeIndex={this.state.activeSlide}
          activeIndex={activeSlide}
          // onSelect={this.changeSlide}
          onSelect={changeSlide}
        >
          <Carousel.Item>
            {/* <CarouselRow movies={this.state.movies.slice(0, 6)} /> */}
            <CarouselRow movies={movies.slice(0, 6)} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <CarouselRow movies={this.state.movies.slice(4, 10)} /> */}
            <CarouselRow movies={movies.slice(4, 10)} />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousel;
