import { Hero, FeaturedReview } from '../components';
import { Skeleton } from '../components/Skeleton';

export const Home = () => {
  return (
    <>
      <Skeleton />
      <Hero />
      <FeaturedReview />
    </>
  );
};
