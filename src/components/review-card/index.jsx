import React from 'react';
import './styles.css';

const ReviewCard = (props) => {
  const { image, title, description, isEven, animate } = props;
 
  return (
    <div
      className={`review-card-wrapper ${isEven ? 'even' : 'odd'}`}
      style={{ animationPlayState: animate ? 'running' : 'paused' }}
    >
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ReviewCard;
