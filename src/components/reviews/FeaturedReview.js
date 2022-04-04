import { useReviews } from '../../hooks/useReviews';
import { ReviewItem, Skeleton } from '..';
import { Link } from 'react-router-dom';

export const FeaturedReview = () => {
  const { reviews, loading } = useReviews();

  if (loading) {
    return <Skeleton count={5} />;
  }

  return (
    <section className="py-10 px-3">
      <h2 className="text-3xl text-center py-5">Featured Reviews</h2>
      <div className="grid lg:grid-cols-3 justify-items-center gap-10 py-5 mt-10">
        {reviews.slice(0, 3).map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>

      <div className="flex justify-center py-10">
        <Link to="/reviews" className="btn btn-outline btn-accent btn-wide">
          See All Reviews
        </Link>
      </div>
    </section>
  );
};
