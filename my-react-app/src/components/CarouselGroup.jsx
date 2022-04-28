import MyCarousel from "./MyCarousel";
import { Container } from "react-bootstrap";

const CarouselGroup = () => {
  return (
    <>
      <MyCarousel heading="Harry Potter" movie="Harry Potter" />
      <MyCarousel heading="James Bond" movie="James Bond" />
      <MyCarousel
        heading="The Lord of the Rings"
        movie="The Lord of The Rings"
      />
    </>
  );
};

export default CarouselGroup;
