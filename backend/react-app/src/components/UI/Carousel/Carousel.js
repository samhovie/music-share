import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {

    return (
        <Carousel>
            <div className='carousel-section'>
                <img src="https://static.wikia.nocookie.net/dreamcatcherwiki/images/e/e6/Dystopia_Road_to_Utopia_digital_album_cover.jpg/" alt="Image 1"/>
                <p className="carousel-tag">Album1</p>
            </div>

            <div className='carousel-section'>
                <img src="https://static.wikia.nocookie.net/dreamcatcherwiki/images/0/08/Road_to_utopia_D_ver.jpg" alt="Image 2" />
                <p className="carousel-tag">Album2</p>
            </div>
            <div className='carousel-section'>
                <img src="https://static.wikia.nocookie.net/dreamcatcherwiki/images/5/53/Dystopia_Road_to_Utopia_A_ver.jpg" alt="Image 3" />
                <p className="carousel-tag">Album3</p>
            </div>
        </Carousel>
    )

}

export default CarouselComponent
