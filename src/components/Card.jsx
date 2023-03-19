import React, { useState } from "react";
import { default as UUID } from "node-uuid";
import Product from "./Product";

const Card=({ props,update,stateHolder,setState,i}) =>{
  


  return (
    <div className="flex flex-col bg-orange-300/80 border-black border  h-[100%] pb-8 px-3 rounded-2xl px-auto">
      <h1 className="  uppercase text-center w-full  font-extrabold text-4xl py-5 ">
        {props.name} <img className="h-12 inline pl-1" src={props.img} alt="" />{" "}
      </h1>

      <div className="flex flex-col flex-grow ">
        <div className=" flex flex-col ">

          {props.selections.map((selection, index) => {
            return (
              <Product
                key={UUID.v4()}
                data={selection}
                val={stateHolder.includes(index)}
                test={update}
                setval={
                  !props.multiple
                    ? () => {
                      
                        stateHolder.includes(index)
                          ? setState(previous=>previous.map((item,number)=>number==i?[]:item))
                          : setState(previous=>previous.map((item,number)=>number==i?[index]:item));
                      }
                    : stateHolder.includes(index)
                    ? () => {
                      setState(previous=>previous.map((item,number)=>number==i?[...item].filter((e) => e !== index):item))
                        
                      }
                    : () => {
                      setState(previous=>previous.map((item,number)=>number==i?[...item,index]:item))
              
                      }
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
