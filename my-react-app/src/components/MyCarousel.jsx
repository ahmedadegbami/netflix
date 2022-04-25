import { Component } from "react";
import {Carousel} from 'react-bootstrap'
import CarouselRow from './CarouselRow'

class MyCarousel extends Component {

    state = {
        hpMovies: []
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
                    hpMovies: body.Search
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
            {this.state.hpMovies.map(movie => (
                    <Carousel.Item>
                <CarouselRow movie={movie} />
                </Carousel.Item>
                    )
            )}
            </Carousel>
  </>

    


        )

    }

}

export default MyCarousel