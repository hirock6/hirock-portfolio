
import Projects from "./allProjects/Projects";
const Section_3 = () => {
  return (
    <section className=" mt-20 max-sm:mt-10">
      <div className="">
        <h1 className=" text-center text-2xl font-semibold">My All Projects</h1>
        <div className=" flex  justify-center max-sm:w-full mt-5 ">
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Section_3;
