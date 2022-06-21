import { ContactContainer, ContactForm, FormLabel, FormInputContainer, InputGroup, FormInput, FormTextAreaContainer, FormTextArea, FormButtonContainer } from './Contact.styles'

const Contact = () => {
  return (
    <ContactContainer>
      <p>have you seen some of my work that brought you here? feel free to get in touch.</p>
      <ContactForm>
        <FormInputContainer>
          <InputGroup>
            <FormLabel>name</FormLabel>
            <FormInput placeholder="your name..." />
          </InputGroup>
          <InputGroup>
            <FormLabel>phone</FormLabel>
            <FormInput placeholder="your phone number..." />
          </InputGroup>
          <InputGroup>
            <FormLabel>email</FormLabel>
            <FormInput placeholder="your email..." />
          </InputGroup>
        </FormInputContainer>
        <FormTextAreaContainer>
          <FormLabel>message</FormLabel>
          <FormTextArea placeholder="what can i do for you?" rows='7'/>
          <FormButtonContainer>
            <button type='submit'>submit</button>
          </FormButtonContainer>
        </FormTextAreaContainer>
      </ContactForm>
    </ContactContainer>
  )
}
export default Contact