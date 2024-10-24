import { BsPersonStanding } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import Style from "./section_2.module.css";
const CardDetails = [
  {
    title: "Leadership",
    icon: <BsPersonStanding size={100} />,
    description:
      "As a developer leader, I guide teams through technical challenges, fostering collaboration, innovation, and efficiency to deliver high-quality solutions while mentoring and empowering team members.",
  },
  {
    title: "Design Thinking",
    icon: <HiOutlineLightBulb size={100} />,
    description:
      "As a developer, my thinking process involves analyzing problems logically, breaking them into manageable tasks, and crafting efficient, scalable solutions through experimentation, continuous learning, and iteration.",
  },
  {
    title: "Teamwork",
    icon: <BsPersonStanding size={100} />,
    description:
      "As a developer, my team work process involves clear communication, active collaboration, sharing knowledge, and leveraging each team member’s strengths to achieve common goals efficiently and effectively.",
  },
  {
    title: "Best Practice",
    icon: <BsPersonStanding size={100} />,
    description:
      "As a developer, my best practices process includes writing clean, maintainable code, following coding standards, prioritizing performance, conducting thorough testing, and continually improving through feedback and learning.",
  },
];

const Section_2 = () => {
  return (
    <section className=" mt-10">
      <div className="">
        <h1 className=" text-center my-5 text-2xl font-semibold">
          Skills Spotlight
        </h1>
        <div className=" flex justify-center">
          <div className=" grid grid-cols-4 gap-5 max-lg:grid-cols-2  max-md:grid-cols-2 max-sm:grid-cols-1">
            {CardDetails.map((item: any, index: any) => (
              <div
                key={index}
                className={` ${Style.cardContainer} shadow-lg rounded-sm max-lg:w-72 p-5 w-60 max-sm:w-full h-[450px] max-lg:h-[350px]  cursor-pointer max-sm:hover:scale-95 max-sm:hover:bg-base-200 bg-base-300 `}
              >
                <div className=" flex justify-center">{item.icon}</div>
                <div className="mt-4">
                  <h1 className=" text-center font-semibold text-xl">
                    {item.title}
                  </h1>
                  <p className=" text-sm opacity-80 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
