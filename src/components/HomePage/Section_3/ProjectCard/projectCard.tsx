"use client";

import { IoMdShareAlt } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = () => {
  return (
    <div className=" w-full  h-[550px] max-sm:h-[580px] bg-base-300 rounded-md overflow-hidden shadow-lg">
      <div className="h-[300px] relative ">
        <Image
          src={
            "https://hirock-pi-1.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdusp1j4e0%2Fimage%2Fupload%2Fv1726239102%2Fportfolio_jems_1%2Frl3psbihlebm4nx8qajt.png&w=3840&q=75"
          }
          alt="project"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-base-100 hover:bg-base-200 flex items-center justify-center">
          <button className=" flex items-center gap-2 p-2  ">
            <IoMdShareAlt size={20} />
            <span>Share</span>
          </button>
        </div>
      </div>
      <div className="  p-5">
        <h1 className=" text-center font-semibold">My Portfolio</h1>
        <p className=" text-center mt-3 text-sm opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          repellendus similique in? Aspernatur molestiae nesciunt cum
        </p>
        <div className=" flex justify-center items-center mt-3">
          <Link
            href={""}
            className=" bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 py-2 px-5 text-base-100 shadow-lg rounded-sm"
          >
            See This
          </Link>
        </div>
        <div className="mt-3 flex justify-between">
          <button>Like</button>
          <button>comment</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
