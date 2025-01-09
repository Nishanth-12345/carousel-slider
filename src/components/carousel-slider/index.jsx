import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import ReviewCard from '../review-card';
import { reviewData } from '../../data/reviewsData';

const CarouselSlider = () => {
  const sliderRef = useRef(null);
  const [animateCards, setAnimateCards] = useState(true);
  const [itemWidth, setItemWidth] = useState(0);
  const slides = [...reviewData, ...reviewData.slice(0, 4)];

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const gap = window.innerWidth <= 728 ? 20 : 38; 
        const firstItemWidth = sliderRef.current.children[0]?.offsetWidth + gap;
        setItemWidth(firstItemWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (itemWidth === 0) return;
    console.log(itemWidth, 'width')
    const slider = sliderRef.current;
    let position = 0;

    const scrollSlider = () => {
      setAnimateCards(true);
      position -= itemWidth;
      slider.style.transition = 'transform 4s cubic-bezier(.48,.06,.61,.83)';
      slider.style.transform = `translateX(${position}px)`;

      if (Math.abs(position) >= (reviewData.length * itemWidth)) {
        setTimeout(() => {
          position = 0;
          slider.style.transition = 'none';
          slider.style.transform = `translateX(${position}px)`;
        }, 4000);
      }

      setTimeout(() => {
        setAnimateCards(false);
      }, 4000);
    };

    scrollSlider();

    const interval = setInterval(() => {
      scrollSlider();
      setTimeout(() => {
        setAnimateCards(true);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [itemWidth]);

  return (
    <div className="carousel-slider-container">
    
      <div className="carousel-slider">
        <div ref={sliderRef} className="testimonials">
          {slides.map((item, index) => (
            <ReviewCard
              key={`${item.id}-${index}`}
              image={item.image}
              title={item.title}
              description={item.description}
              isEven={index % 2 === 0}
              animate={animateCards}
            />
          ))}
        </div>
      </div>
  
    </div>
  );
};

export default CarouselSlider;
