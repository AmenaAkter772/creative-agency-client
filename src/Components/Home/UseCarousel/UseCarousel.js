import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import carousel2 from '../../../images/carousel-2.png'
import carousel1 from '../../../images/carousel-1.png'
import carousel5 from '../../../images/carousel-5.png'

const UseCarousel = () => {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    return (
        <div style={{hight:'700px', backgroundColor:'#111430'}} className="text-center">
        <h1 className="text-white text-center">Here Are Some of<span style={{color:'#7AB259'}}> Our Works</span></h1>
       <div className="pb-5 text-center">
            <Carousel activeIndex={index} onSelect={handleSelect} className="">
            <Carousel.Item style={{hight:'400px', width:'400px'}} className="text-center">
                <img
                
                className="d-block w-100"
                src={carousel2}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{hight:'400px', width:'400px'}} className="text-center">
                <img
                
                className="d-block w-100"
                src={carousel1}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{hight:'400px', width:'400px'}} className="text-center">
                <img
                className="d-block w-100"
                src={carousel5}
                alt="Third slide"
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
       </div>
    );
};

export default UseCarousel;