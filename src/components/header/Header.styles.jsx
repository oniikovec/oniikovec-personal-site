import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  border-bottom: 1px solid #c0c1c2;

  span {
    color: #444444;
    font-size: 2rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 500;
  }
  h2 {
    font-size: 10rem;
    font-weight: 500;
    color: #444444;
  }
`

export const ScrollDownHint = styled(motion.span)`
  position: absolute;
  bottom: 0;
`