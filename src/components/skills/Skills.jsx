import { SkillsContainer, Skill } from './Skills.styles'
import { DiReact, DiNodejsSmall, DiPostgresql } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiStyledcomponents, SiMongodb, SiFirebase, SiMysql, SiExpress, SiGraphql } from 'react-icons/si'

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
        <DiNodejsSmall />
      </Skill>
      <Skill>
        <SiExpress />
      </Skill>
      <Skill>
        <SiMongodb />
      </Skill>
      <Skill>
        <SiMysql />
      </Skill>
      <Skill>
        <DiPostgresql />
      </Skill>
      <Skill>
        <SiGraphql />
      </Skill>
      <Skill>
        <SiFirebase />
      </Skill>
      <Skill>
        <SiStyledcomponents />
      </Skill>
    </SkillsContainer>
  )
}
export default Skills