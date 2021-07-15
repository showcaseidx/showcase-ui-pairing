import Card from './Card'
import styled from 'styled-components'

const Container = styled.div``

export default function List({ data }) {
  return (
    <Container>
      {data &&
        data.pages.map((item) => {
          console.log(item)
          return (
            <Card
              key={item.id}
              title={item.title}
              imageUrl={item.thumbnail.url}
            />
          )
        })}
    </Container>
  )
}
