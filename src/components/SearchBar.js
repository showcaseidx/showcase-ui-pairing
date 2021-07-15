import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  height: 100px;
  width: 100px;
`

const Form = styled.form``

const Button = styled.button``

const Input = styled.input``

export default function SearchBar({ handleSubmit }) {
  const [text, setText] = useState('')
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e, text)}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}
