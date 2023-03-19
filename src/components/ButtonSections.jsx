import React from "react";

const ButtonSections = ({ state, clickHandle }) => {
  return (
    <div className=" bg-orange-200/80 p-5   mt-7 w-full  bottom-0">
      <h1 className=" mt-2  lg:text-3xl text-4xl mb-4  ml-auto mr-1  py-4 sticky top-0 text-center ">
        Ready to pull the trigger?{" "}
      </h1>
      {state ? (
        <h1 className=" mt-2  lg:text-4xl text-5xl mb-4  ml-auto mr-1  py-4 sticky top-0 text-center font-bold">
          Finish picking phase before proceeding!{" "}
        </h1>
      ) : (
        <button
          type=""
          onClick={clickHandle}
          className=" duration-200 lg:text-4xl hover:bg-orange-700/50 active:bg-orange-200 border-2 border-black text-6xl text-white bg-orange-700 p-4 block mx-auto rounded-2xl  mb-12"
        >
          Order now!
        </button>
      )}
    </div>
  );
};

export default ButtonSections;
