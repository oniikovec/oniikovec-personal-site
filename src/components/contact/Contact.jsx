import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ContactFormContainer, FormContainer, FormLabel, FormInputContainer, InputGroup, FormInput, FormTextAreaContainer, FormTextArea, FormButtonContainer, MessageSent } from './Contact.styles'


// const FORM_ENDPOINT = 'https://public.herotofu.com/v1/0c05aba0-f226-11ec-8ed8-456386acdd98'
const DEFAULT_FORM_FIELDS = {
  name: '',
  email: '',
  tel: '',
  message: ''
}

const ContactForm = () => {

  const [sent, setSent] = useState(false)
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS)
  const { name, email, tel, message } = formFields
  const form = useRef()
  
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({
      ...formFields, [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    emailjs.sendForm('service_1umrqgu', 'template_n3pcbng', form.current, '2PW5yOKV_onvBUtpP')
      .then(() => {
        setSent(true)
      }, (error) => {
        console.log(error.text);
      })
    resetFormFields()
  }
  
  const resetFormFields = () => {
    setFormFields(DEFAULT_FORM_FIELDS)
    setSent(false)
  }


  return (
    <ContactFormContainer>
      <p>have you seen some of my work that brought you here? feel free to get in touch.</p>
      <FormContainer ref={form} onSubmit={handleSubmit}>
        <FormInputContainer>
          <InputGroup>
            <FormLabel htmlFor='name'>name</FormLabel>
            <FormInput required type='text' id='name' name='name' placeholder="your name..." value={name} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <FormLabel htmlFor='email'>email</FormLabel>
            <FormInput required type='email' id='email' name='email' placeholder="your email..." value={email} onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <FormLabel htmlFor='tel'>phone</FormLabel>
            <FormInput type='tel' name='tel' id='tel' placeholder="your phone number..." value={tel} onChange={handleChange} />
          </InputGroup>
        </FormInputContainer>
        <FormTextAreaContainer>
          <FormLabel htmlFor='message'>message</FormLabel>
          <FormTextArea required placeholder="what can i do for you?" id='message' name='message' rows='8' value={message} onChange={handleChange} />
          <FormButtonContainer>
            <div>
              {
                sent && <MessageSent initial={{opacity: 1}} animate={{opacity: 0}} transition={{delay: 4, duration: 1}}>message sent, thank you.</MessageSent>
              }
            </div>
            <button type='submit'>submit</button>
          </FormButtonContainer>
        </FormTextAreaContainer>
      </FormContainer>
      
    </ContactFormContainer>
  )
}
export default ContactForm