import React from "react";

const FinalView = ({ clickHandle }) => {
  return (
    <div className="relative flex-grow h-full">
      <div className="p-5 bg-red-200/50 absolute w-[100%] top-[40%] translate-y-[-40%]  h-[40%] text-4xl mx-auto flex flex-col gap-5 justify-around ">
        <p className="mx-auto text-center ">
          This is my project created using
          <span className="font-bold"> React.js</span> and{" "}
          <span className="font-bold">Tailwind</span>.{" "}
        </p>

        <h1 className="text-center text-7xl">
          {" "}
          Karol <span className="font-bold">Zajac</span>
        </h1>
        <button
          type=""
          className="duration-200 border-2  border-orange-700 bg-red-200/50 hover:bg-red-200/30 active:bg-red-200 mx-auto p-2 rounded-md"
          onClick={clickHandle}
        >
          {" "}
          Try again!
        </button>
      </div>
    </div>
  );
};

export default FinalView;
