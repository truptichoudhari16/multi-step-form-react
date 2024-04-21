import React from "react";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
        <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
          Preview & Submit
        </h1>

        <div className="flex justify-center mt-40">
          <button
            onClick={() => navigate("/thankyou")}
            className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75 "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Submit;
