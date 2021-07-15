import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import styled from 'styled-components'
import List from './components/List'

const Container = styled.div`
  width: 100%;
  max-width: 850px;
`

const Header = styled.div`
  width: 100%;
  height: 80px;
  background: black;
  color: white;
  margin: 0 auto;
`

function App() {
  const [data, setData] = useState()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function getData(searchTerm) {
      if (searchTerm) {
        let url = `https://api.wikimedia.org/core/v1/commons/search/page?q=${searchTerm}&limit=10`
        let response = await fetch(url)
        let json = await response.json()
        setData(json)
      }
    }

    getData(searchTerm)

    return () => getData(searchTerm)
  }, [searchTerm])

  function handleSubmit(e, text) {
    e.preventDefault()

    setSearchTerm(text)
  }

  return (
    <Container className="App">
      <Header>
        <h1>Wikimedia image browser</h1>
      </Header>
      <SearchBar handleSubmit={handleSubmit} />
      <List data={data} />
    </Container>
  )
}

export default App
