import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c0c1c2;

  h1 {
    font-size: 3.5rem;
    font-weight: 500;
  }
  h2 {
    font-size: 10rem;
    font-weight: 500;
    color: #444444;
  }
  span {
    color: #444444;
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 8rem;
    }
    span {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 320px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 7rem;
    }
    span {
      font-size: 1.2rem;
    }
  }
`;

export const ScrollDownHint = styled(motion.span)`
  position: absolute;
  bottom: 0;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
`;
