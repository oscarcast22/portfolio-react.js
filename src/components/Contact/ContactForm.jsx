import { useForm, ValidationError } from '@formspree/react';
import styled from "@emotion/styled";


const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: auto;
  gap: .3rem;

  button{
    width: 80px;
  }
`

const Label = styled.label`
  text-align: left;
  font-weight: 500;
  font-size: 1.2rem;
`

const Input = styled.input`
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 2px solid #b6b6b6;
  color: white;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
`

const Textarea = styled.textarea`
  height: 180px;
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 2px solid #b6b6b6;
  color: white;
`

const Button = styled.button`
  margin: auto;
  margin-top: 20px;
  border-radius: 7px;
  border: none;
`

function ContactForm() {
  const [state, handleSubmit] = useForm("mdornpkp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Info>
          <Field>
            <Label htmlFor="name">
              Name
            </Label>
            <Input id="name" type="text" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors}/>
          </Field>
          <Field>
            <Label htmlFor="email">
              Email
            </Label>
            <Input id="email" type="email" name="email" required/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
          </Field>
        </Info>
        <Label htmlFor="message">
          Message
        </Label>
        <Textarea id="message" name="message" required/>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
        <Button type="submit" disabled={state.submitting}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactForm