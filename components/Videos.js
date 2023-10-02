import React from "react";

function Videos({ videos }) {
  return (
    <div className="w-[80%] bg-white p-8 flex flex-col gap-4 rounded-md min-h-8 mb-[3%]">
      <p className="text-black w-full text-left font-semibold text-lg">
        Videos
      </p>
      <div className="flex flex-row  gap-2 box-border relative overflow-x-scroll overflow-y-scroll w-full">
        {videos.length ? (
          videos.map((item) => (
            <iframe
              width={300}
              height={200}
              title={item.name}
              src={`https://www.youtube.com/embed/${item.key}?enablejsapi=1`}
              key={item.id}
              allow="accelerometer; fullscreen"
              className="rounded-md"
            ></iframe>
          ))
        ) : (
          <p className="text-black">There are no movie videos</p>
        )}
      </div>
    </div>
  );
}

export default Videos;
