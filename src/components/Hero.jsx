import React from "react";
import Card from "./Card";
import { default as UUID } from "node-uuid";
const Hero = ({ data, userChoice, setUserChoice, }) => {
  return (
    <div>
      <h1 className="lg:w-[50%]  xl:w-[30%] w-[80%] rounded-md leading-lose mx-auto text-center m-10 p-3 text-5xl bg-orange-100/90">
        We will make pizza <br />
        <span className="text-6xl font-bold italic text-red-700 font-outline-2">
          YOUR{" "}
        </span>{" "}
        Way!
      </h1>
      <div className="  p-4 grid mt-2  lg:grid-cols-3 md:grid-cols-2  grid-cols-1  md:w-[90%] gap-2 lg:gap-3 xl:w-[1200px] mx-auto  ">
        {data.map((item, index) => (
          <Card
            key={UUID.v4()}
            props={item}
            stateHolder={userChoice[index]}
            setState={setUserChoice}
            i={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
