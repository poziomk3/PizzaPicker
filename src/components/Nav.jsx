import React from "react";

const Nav = ({ price }) => {
  return (
    <div className="   w-full  bg-orange-200/90 sticky top-0 border-orange-200 border-b-black border-2 z-30 ">
      <div className=" md:w-[90%]  flex  relative  lg:w-[1000px] mx-auto justify-between">
        <h1 className="hidden md:block mt-2  lg:text-5xl text-3xl mb-4 ms-2   py-4 sticky top-0">
          PIZZA <br /> PICKER{" "}
        </h1>
        <img
          className=" absolute h-[8rem]   md:left-[50%] md:translate-x-[-50%] md:top-[50%] md:translate-y-[-50%] mt-3 ml-2 pb-4"
          src="https://www.svgrepo.com/show/93202/pizza.svg"
          alt=""
        />
        <h1 className="  mt-2  lg:text-4xl text-2xl mb-4  ml-auto mr-1  py-4 sticky top-0 text-center">
          YOUR PRICE: <br />
          <span className="font-extrabold pr-2  pt-2 inline-block">
            {price()}
          </span>
          $
        </h1>
      </div>
    </div>
  );
};

export default Nav;
