import React, { useState } from 'react';

import background from '../../assets/background-images/banner.jpg';
import Carousel from '../../../node_modules/react-bootstrap/Carousel';

function Banner() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="Banner">
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
                <Carousel.Item style={{'height':"400px"}}>
                    <img
                        className="d-block w-100 noDrag"
                        src={background}
                        alt="First slide"
                        style={{'height':"1000px", 'object-fit':"cover"}}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':"400px"}}>
                    <img
                        className="d-block w-100 noDrag"
                        src={background}
                        alt="Second slide"
                        style={{'height':"1000px", 'object-fit':"cover"}}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':"400px"}}>
                    <img
                        className="d-block w-100 noDrag"
                        src={background}
                        alt="Third slide"
                        style={{'height':"1000px", 'object-fit':"cover"}}
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Banner;
