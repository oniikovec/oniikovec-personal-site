import Type from "../type/Type";
import { AiOutlineArrowDown } from "react-icons/ai";
import { HeaderContainer, ScrollDownHint, Logo } from "./Header.styles";
// import imgLogo from "../../images/ONI_logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>oni</h1>
      <Type />
      <ScrollDownHint
        initial={{ opacity: 1, y: -10 }}
        animate={{ opacity: 0, y: 10 }}
        transition={{ delay: 6, duration: 4 }}
      >
        <AiOutlineArrowDown />
      </ScrollDownHint>
    </HeaderContainer>
  );
};
export default Header;
