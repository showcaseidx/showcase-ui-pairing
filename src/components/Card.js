import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 400px;
`

const Img = styled.img`
  height: 400px;
  padding: 20px;
`

export default function Card({ title, imageUrl }) {
  return (
    <CardContainer>
      <h3>{title}</h3>
      {imageUrl && <Img src={imageUrl} alt={title}></Img>}
    </CardContainer>
  )
}
