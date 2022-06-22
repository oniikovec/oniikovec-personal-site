import { useState } from 'react'
import { ContactFormContainer, FormContainer, FormLabel, FormInputContainer, InputGroup, FormInput, FormTextAreaContainer, FormTextArea, FormButtonContainer } from './Contact.styles'


// const FORM_ENDPOINT = 'https://public.herotofu.com/v1/0c05aba0-f226-11ec-8ed8-456386acdd98'
const DEFAULT_FORM_FIELDS = {
  name: '',
  email: '',
  tel: '',
  message: ''
}

const ContactForm = () => {

  const [status, setStatus] = useState("submit");
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS)
  const { name, email, tel, message } = formFields
  
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({
      ...formFields, [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending...')
    const emailDetails = {
      name: name,
      email: email,
      tel: tel,
      message: message
    }
    const response = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json;charset=utf-8"
      },
      body: JSON.stringify(emailDetails)
    })
    setStatus('submit')
    const result = await response.json()
    alert(result.status)
    resetFormFields()
  }
  
  const resetFormFields = () => {
    setFormFields(DEFAULT_FORM_FIELDS)
  }


  return (
    <ContactFormContainer>
      <p>have you seen some of my work that brought you here? feel free to get in touch.</p>
      <FormContainer onSubmit={handleSubmit}>
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
            <button type='submit'>{status}</button>
          </FormButtonContainer>
        </FormTextAreaContainer>
      </FormContainer>
    </ContactFormContainer>
  )
}
export default ContactForm