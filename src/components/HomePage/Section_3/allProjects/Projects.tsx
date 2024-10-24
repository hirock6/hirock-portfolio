import ProjectCard from "../ProjectCard/projectCard";
const Arr = [1, 2, 3, 4, 5, 6];
const Projects = () => {
  return (
    <div className=" grid grid-cols-2 max-md:grid-cols-1 gap-5 w-full">
      {Arr.map((item: any, index: any) => (
        <ProjectCard key={index} />
      ))}
    </div>
  );
};

export default Projects;
