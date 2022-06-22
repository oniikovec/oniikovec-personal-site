import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 4% 0;
  border-top: 1px solid #c0c1c2;

  @media screen and (max-width: 614px) {
    display: grid;
    grid-template-columns: repeat(5, 55px);
  }
`

export const Skill = styled.span`
  padding: 10px;
  color: #444444;
  font-size: 2.5rem;
`