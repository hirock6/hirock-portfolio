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
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a,
            mollitia reiciendis nulla debitis ipsam laudantium ad placeat
            doloribus, illum dignissimos dolor distinctio iste ullam facilis
            modi, temporibus sed alias.
          </p>
          {/* --------- */}
          <div className="flex max-sm:flex-col max-sm:items-start mt-5 items-center gap-5">
            <div className=" ">
              <h1>Email:</h1>
              <p className=" max-sm:text-sm">hirockdutta0@gmail.com</p>
            </div>
            <div className=" ">
              <h1>Behance:</h1>
              <p>hirock Dutta</p>
            </div>
          </div>
          {/* ------------------------ */}
          <div className="mt-5 flex max-sm:flex-col items-center gap-5">
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
