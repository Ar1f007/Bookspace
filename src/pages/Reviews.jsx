import { ReviewItem } from '../components';
import { useReviews } from '../hooks/useReviews';

export const Reviews = () => {
  const reviews = useReviews();

  const avgRatings =
    reviews.reduce((acc, cur) => {
      acc = acc + cur.rating;
      return acc;
    }, 0) / reviews.length;
  return (
    <section className="py-10 px-3">
      <div className="flex justify-between align-middle">
        <h2 className="text-3xl border-b-2 py-3 max-w-fit ">Total Reviews ({reviews.length})</h2>
        <p>Avg Ratings: {avgRatings.toFixed(1)}/5</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 py-5 mt-10">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};
