import styled from "styled-components"

export const ContactContainer = styled.div`
  margin: 5% 30%;

  p {
    margin-bottom: 30px;
    font-size: 1.2rem;
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormLabel = styled.label`
  margin: 0 0 5px 5px;
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`

export const FormInput = styled.input`
  font-family: 'Roboto Mono', monospace;
  padding: 10px 0 10px 5px;
  margin-right: 30px;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 5px #c9c9c9;
`

export const FormTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const FormTextArea = styled.textarea`
  font-family: 'Roboto Mono', monospace;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 5px #c9c9c9;
`

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  button {
    font-family: 'Roboto Mono', monospace;
    
    font-size: 1rem;
    color: #eeeff1;
    padding: 10px;
    margin-top: 20px;
    background-color: #444444;
    border-radius: 5px;
    border: none;
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: #636262;
    }
  }
`