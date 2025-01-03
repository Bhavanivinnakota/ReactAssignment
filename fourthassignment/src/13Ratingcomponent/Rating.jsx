
import React, { useState } from 'react';

function Rating({ maxStars }) {
  const [rating, setRating] = useState(0); // Store the current rating
  
  // Handle star click event
  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1); // Update the rating to the clicked star index
  };

  // Render the stars
  const stars = [];
  for (let i = 0; i < maxStars; i++) {
    stars.push(
      <span
        onClick={() => handleStarClick(i)}
        style={{
          fontSize: '30px',
          cursor: 'pointer',
          color: i < rating ? 'gold' : 'gray', // Highlight selected stars in gold
        }}
      >
        ★
      </span>
    );
  }

  return (
    <div>
      <h3>Rate Us</h3>
      <div>{stars}</div>
      <p>Rating: {rating} out of {maxStars}</p>
    </div>
  );
}

export default Rating;
