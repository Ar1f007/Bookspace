import { useState, useEffect } from 'react';

export const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('data/reviews.json')
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        });
    }, 250);
  }, []);

  return { reviews, loading };
};
