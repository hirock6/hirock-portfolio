"use client";
import Image from "next/image";
import Style from "./cv.module.css";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

useEffect;

const CvBtn = () => {
  const [closeFlag, setCloseFlag] = useState(false);

  const handleDownload = () => {
    const imageUrl = "/CV/hirock_resume.jpg";
    const fileName = "downloaded-resume.jpg";
    const link = document.createElement("a");
    link.href = imageUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (closeFlag) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [closeFlag]);

  return (
    <div className="">
      <button
        onClick={() => {
          setCloseFlag(!closeFlag);
        }}
        className={` bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md text-base-100 py-2 px-4 rounded-sm`}
      >
        Download CV
      </button>
      <div
        className={` bg-base-100  ${
          !closeFlag ? "hidden" : "block"
        } overflow-y-scroll  fixed z-20 top-20 left-0 w-full h-full  text-base`}
      >
        <div className="  container mx-auto px-5 h-full">
          <div className=" my-5 flex justify-end">
            <button className=" " onClick={() => setCloseFlag(false)}>
              <MdClose size={30} />
            </button>
          </div>

          <div className=" flex justify-center pb-40">
            <div className="  flex flex-col items-center justify-center h-full w-fit">
              <Image
                src={"/CV/hirock_resume.jpg"}
                alt="CV"
                width={500}
                height={500}
                className=" shadow-lg"
              />
              <button
                onClick={handleDownload}
                className="  py-3 px-6 mt-5 bg-emerald-600 text-base-100 hover:bg-emerald-700 active:bg-emerald-800 rounded-sm shadow-md "
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvBtn;
