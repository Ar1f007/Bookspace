import { useState, useEffect } from 'react';

export const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('data/reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return reviews;
};
