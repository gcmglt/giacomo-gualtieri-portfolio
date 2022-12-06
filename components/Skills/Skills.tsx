import skills from "../../data/skills";
import SkillsItem from "./SkillsItem";
import Title from "../Title";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Skills</Title>
        <div className="flex flex-row flex-wrap">
          {skills.map((skills, i) => (
            <SkillsItem
              key={i}
              skillLink={skills.skillLink}
              skillSrc={skills.skillSrc}
              skillAlt={skills.skillAlt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
