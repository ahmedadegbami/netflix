import { Component } from "react";
import {Carousel} from 'react-bootstrap'
import CarouselRow from './CarouselRow'

class MyCarousel extends Component {

    state = {
        movies: []
    }

    componentDidMount = () => {
        this.fetchData()
    }

    fetchData = async () => {
        try {
            const response = await fetch('http://www.omdbapi.com/?apikey=6e593066&s=harry%20potter')
            if (response.ok) {

                const body = await response.json()
                console.log(body)

                this.setState({
                    movies: body.Search
                })

            } else {
                console.log('problem while fetching')
            }
    
            
        } catch (error) {
            console.log(error)
        }
    }

    render () {


        return (
            <>
<h2>{this.props.heading}</h2>
            <Carousel>
                    <Carousel.Item>
            {this.state.movies.map(movie => (
                        <CarouselRow movies={this.state.movies} />

                        )
                        )}
                        </Carousel.Item>
            </Carousel>
  </>

    


        )

    }

}

export default MyCarousel