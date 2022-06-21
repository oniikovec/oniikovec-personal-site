import { FooterContainer } from './Footer.styles'

const Footer = () => {

  const getYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <p><span>©</span> {getYear} oniikovec</p>
    </FooterContainer>
  )
}
export default Footer