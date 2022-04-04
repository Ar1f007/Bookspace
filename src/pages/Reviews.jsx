import { ReviewItem } from '../components';
import { Skeleton } from '../components/Skeleton';
import { useReviews } from '../hooks/useReviews';

export const Reviews = () => {
  const { reviews, loading } = useReviews();

  const avgRatings =
    reviews.reduce((acc, cur) => {
      acc = acc + cur.rating;
      return acc;
    }, 0) / reviews.length;

  if (loading) {
    return <Skeleton count={6} />;
  }
  return (
    <section className="py-10 px-3">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl lg:text-3xl border-b-2 py-3 max-w-fit">
          Total Reviews ({reviews.length})
        </h2>
        <p>Avg Ratings: {avgRatings.toFixed(1)}/5</p>
      </div>
      <div className="grid md:grid-cols-3 gap-y-10 py-5 mt-10 justify-items-center">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};
