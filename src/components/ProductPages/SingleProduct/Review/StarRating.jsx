import React from 'react';
import { Star } from '@mui/icons-material';

const StarRating = ({ value, onStarClick }) => {
  const stars = [1, 2, 3, 4, 5];

  return (  
    <div>
      {stars.map((star) => (
        <Star
          key={star}
          style={{ cursor: 'pointer', color: star <= value ? 'yellow' : 'gray' }}
          onClick={() => onStarClick(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
