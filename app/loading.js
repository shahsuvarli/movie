export default function MoviesLoading() {
  return (
    <div className="text-center py-32 px-8">
      <div className="animate-pulse">
        <div
          role="status"
          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center min-h-120 py-48 w-full"
        >
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> */}
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div> */}
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="flex flex-row gap-2 justify-between w-full items-center overflow-x-auto p-4">
          {Array.from({ length: 6 }, (movie, i) => (
            <div
              className="text-white flex flex-col justify-center items-center my-4"
              key={i}
            >
              <div className="bg-gray-700/50 px-6 rounded-lg h-60 w-40">
                <h2 className="text-lg invisible text-white">
                  This is a skeleton render
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
