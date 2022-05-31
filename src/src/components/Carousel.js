import React from 'react';
import {Carousel, Button} from 'react-bootstrap';

class Slides extends React.Component {
    render() {

        return(
            <div style={{marginLeft:'60px'}} >
                <Carousel>
  <Carousel.Item interval={1100}>
    <img
      className=" carousel-image"
      src="https://cdn.mos.cms.futurecdn.net/gKytN5Fo2sQRbJf5MhxMeL-1200-80.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 class="carousel-title2">Garden Story</h3>
      <Button variant="primary">Play</Button>{' '}
      <Button variant="primary">learn More</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className=" carousel-image"
      src="https://www.godisageek.com/wp-content/uploads/forager.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 class="carousel-title2">Hidden Time</h3>
      <Button variant="primary">Play</Button>{' '}
      <Button variant="primary">Learn More</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className=" carousel-image"
      src="https://img.game-news24.com/2022/05/Stardew-Valley-catches-magic-New-game-of-pixel-games-are-taking-hold-on-Steam.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 class="carousel-title">Little Witch in the Woods</h3>
      <Button class="carousel-button" variant="primary">Play</Button>{' '}
      <Button class="carousel-button" variant="primary">Learn More</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>    
<div class="column"> </div>      
   </div>
        )
    }
}

export default Slides;