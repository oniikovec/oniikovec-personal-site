import Type from '../type/Type';
import { SiCodechef } from 'react-icons/si';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { HeaderContainer, ScrollDownHint } from './Header.styles'


const Header = () => {
  return (
    <HeaderContainer>
      <h2><SiCodechef /></h2>
      <h1>oniikovec</h1>
      <Type />
      <ScrollDownHint initial={{ opacity: 1, y: -10 }} animate={{ opacity: 0, y: 10 }} transition={{ delay: 2, duration: 5 }}>
        <AiOutlineArrowDown />
      </ScrollDownHint>
    </HeaderContainer>
  )
}
export default Header