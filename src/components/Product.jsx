import React from "react";
import { GiCrossMark } from "react-icons/gi";
import { VscCheckAll } from "react-icons/vsc";
function Product({ data, val, setval }) {
  return (
    <div className="flex justify-end  p-2 mx-auto    ">
      <button
        className={` duration-100 cursor-pointer flex text-3xl uppercase ${
          val
            ? "  italic font-bold  "
            : " font-thin hover:font-bold hover:text-opacity-50"
        }`}
        onClick={() => {
          setval();
        }}
      >
        {val ? (
          <VscCheckAll
            className={`mx-3 mt-auto text-blue-900   out`}
            size={27}
          />
        ) : (
          <GiCrossMark className={`mx-3 mt-auto text-red-600`} size={27} />
        )}
        {data.name}
      </button>
    </div>
  );
}

export default Product;
