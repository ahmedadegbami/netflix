import "./App.css";
import MyNav from "./components/MyNav";
import HeadingNavbar from "./components/HeadingNavbar";
import MyCarousel from "./components/MyCarousel";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CarouselGroup from "./components/CarouselGroup";
import TVshows from "./components/TVshows";
import MoviesDetails from "./components/MoviesDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="dark-netflix">
        <MyNav />
        <HeadingNavbar />
        <Routes>
          <Route path="/" element={<CarouselGroup />} />
          <Route path="/tv-shows" element={<TVshows />} />
          <Route path="/details/:movieID" element={<MoviesDetails />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
