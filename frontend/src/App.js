import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className='py-3'>
          <Homescreen />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
