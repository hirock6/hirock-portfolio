import Image from "next/image";
import Typing from "./textTypingEffect/typing";
import HireBtn from "./Btns/hireBtn/hireBtn";
import CvBtn from "./Btns/cvBtn/cvBtn";
const Section_1 = () => {
  const onCVandHireBtn = () => {};

  return (
    <section>
      <div className=" flex max-md:flex-col gap-5">
        <div className=" max-md:w-full  py-10 flex flex-col justify-center w-1/2 ">
          <h1 className=" text-5xl max-lg:text-4xl font-semibold ">
            Hi! I'm Hirock Dutta
          </h1>
          <h1 className=" mt-5 text-xl  font-semibold flex max-sm:flex-col  max-sm:gap-2 gap-4">
            And I'm{" "}
            <Typing
              text={{
                text1: "Frontend Developer",
                text2: "Backend Developer",
                text3: "FullStack Developer",
              }}
            />
          </h1>
          <p className="mt-3 opacity-80">
            As a full-stack developer, I specialize in building dynamic and
            scalable web applications, proficient in both front-end and back-end
            technologies. I create seamless, efficient, and responsive user
            experiences.
          </p>
          {/* --------- */}
          <div className="flex max-sm:flex-col max-sm:items-start mt-5 items-center gap-5">
            <div className=" ">
              <h1 className=" font-semibold">Email:</h1>
              <p className=" max-sm:text-sm opacity-80">
                hirockdutta0@gmail.com
              </p>
            </div>
            <div className=" ">
              <h1 className=" font-semibold">Behance:</h1>
              <p className=" max-sm:text-sm opacity-80">hirock Dutta</p>
            </div>
          </div>
          {/* ------------------------ */}
          <div className="mt-10 max-sm:mt-5 flex max-sm:flex-col items-center gap-5">
            <CvBtn />
            <HireBtn />
          </div>

          {/* ----------------- */}
        </div>
        <div className=" max-md:w-full w-1/2">
          <Image
            src={"/images/man-1-0.png"}
            alt="img"
            width={500}
            height={500}
            className=" object-cover  w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_1;
