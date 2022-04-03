export const Hero = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
          className="md:max-w-sm rounded-lg shadow-2xl"
          alt="books"
        />
        <div>
          <h1 className="text-3xl lg:text-5xl lg:leading-tight lg:w-2/4 capitalize">
            Enrich your life. Read It and Reap.
          </h1>
          <p className="py-6 lg:w-3/4">
            You’re Only One Book Away From a Good Mood. We Lose Ourselves in Books, We Find
            Ourselves There, Too.
          </p>
          <button className="btn btn-primary hover:shadow-lg btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};
