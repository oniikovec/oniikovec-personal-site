import headerImg from "../../assets/logo_dark-nobg.png";
import Type from "../type/Type";
import { AiOutlineArrowDown } from "react-icons/ai";
import { HeaderContainer, ScrollDownHint, HeaderImage } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage
        src={headerImg}
        alt="header-image"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2, bounce: 0.2 }}
      />
      <h1>oniikovec</h1>
      <Type />
      <ScrollDownHint
        initial={{ opacity: 1, y: -10 }}
        animate={{ opacity: 0, y: 10 }}
        transition={{ delay: 8, duration: 4 }}
      >
        <AiOutlineArrowDown />
      </ScrollDownHint>
    </HeaderContainer>
  );
};
export default Header;
