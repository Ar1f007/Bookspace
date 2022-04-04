import { useReviews } from '../hooks/useReviews';
import { ReviewItem } from '../components';
import { Link } from 'react-router-dom';
import { Skeleton } from './Skeleton';

export const FeaturedReview = () => {
  const { reviews, loading } = useReviews();

  if (loading) {
    return <Skeleton count={5} />;
  }

  return (
    <section className="py-10 px-3">
      <div className="grid md:grid-cols-3 justify-items-center gap-10 py-5 mt-10">
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
