import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Post from './Compo/Post'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './Compo/Nav'

function App() {
 

  return (
    <>
    <Nav></Nav>
    <Routes>
  <Route path="/" element={<Post/>}></Route>
 

</Routes>
    </>
  )
}

export default App
