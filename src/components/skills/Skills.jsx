import { SkillsContainer, Skill } from "./Skills.styles";
import { DiReact, DiNodejsSmall, DiPostgresql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiStyledcomponents,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiExpress,
  SiGraphql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <SkillsContainer>
      <Skill>
        <IoLogoJavascript />
      </Skill>
      <Skill>
        <DiReact />
      </Skill>
      <Skill>
        <TbBrandNextjs />
      </Skill>
      <Skill>
        <DiNodejsSmall />
      </Skill>
      <Skill>
        <SiExpress />
      </Skill>
    </SkillsContainer>
  );
};
export default Skills;
