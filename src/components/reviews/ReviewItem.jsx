export const ReviewItem = ({ review }) => {
  const { name, text, rating, img } = review;

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl border-2 border-gray-100">
      <div className="avatar flex justify-center pt-10">
        <div className="w-24 rounded-full">
          <img src={img} alt={name} />
        </div>
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{text}</p>
        <p className="mt-3 font-semibold border-2 border-b-gray-700 px-5 py-2">
          Rating: {rating}/5
        </p>
      </div>
    </div>
  );
};
