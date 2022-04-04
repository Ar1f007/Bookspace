export const Skeleton = ({ count }) => {
  return (
    <div className="grid md:grid-cols-3 gap-y-10 py-5 mt-10">
      {Array.from({ length: count }, (_, i) => (
        <div
          className="border border-gray-300 shadow-lg rounded-md p-4 max-w-sm w-full mx-auto"
          key={i}
        >
          <div className="animate-pulse flex flex-col py-10">
            <div className="mb-6 rounded-full bg-gray-700 h-20 w-20 mx-auto"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 w-36 mx-auto bg-gray-700 rounded"></div>
              <div className="space-y-3">
                <div className="h-2 bg-gray-700 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-700 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-700 rounded"></div>
              </div>

              <div className="h-10 bg-gray-700 w-28 mx-auto rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
