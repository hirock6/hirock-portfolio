"use client";
import Style from "./hire.module.css";
import { useState, useEffect } from "react";
const HireBtn = () => {
  const [hireFlag, setHireFlag] = useState(false);
  useEffect(() => {
    if (hireFlag) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [hireFlag]);
  return (
    <div className="">
      <button
        onClick={() => setHireFlag(!hireFlag)}
        className={` bg-lime-600 hover:bg-lime-700 active:bg-lime-800" shadow-md text-base-100 py-2 px-4 rounded-sm`}
      >
        Hire Me Now!
      </button>
      <div
        className={` bg-base-100 ${
          !hireFlag ? "hidden" : "block"
        }  overflow-y-scroll  fixed top-0 left-0 w-full h-full  text-base`}
      >
        <div className=" relative container mx-auto px-5 h-full">
          <button
            className=" absolute right-0 top-5"
            onClick={() => setHireFlag(false)}
          >
            Cancel
          </button>

          <div className="flex items-center justify-center h-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nam
            aperiam esse excepturi repellendus voluptas quaerat perferendis ut
            non ducimus obcaecati mollitia? Repellat maxime, magnam pariatur
            soluta recusandae exercitationem veritatis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireBtn;
