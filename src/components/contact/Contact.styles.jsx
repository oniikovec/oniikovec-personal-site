import styled from "styled-components"
import { motion } from "framer-motion"

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 7% 0;
  max-width: 620px;

  p {
    font-weight: 600;
    margin-bottom: 30px;
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 7% 3%;
    min-width: 280px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormLabel = styled.label`
  margin: 0 0 5px 5px;
`

export const FormInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormInput = styled.input`
  font-family: 'Roboto Mono', monospace;
  padding: 10px 0 10px 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 5px #c9c9c9;

  &:focus-visible {
    box-shadow: 1px 1px 5px gray;
    outline: none;
  }
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
  resize: vertical;

  &:focus-visible {
    box-shadow: 1px 1px 5px gray;
    outline: none;
  }
`

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

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

export const MessageSent = styled(motion.h4)`
  font-size: 1rem;
  font-weight: 400;
  color: #444444;
  margin: 20px 0 0 10px;
`