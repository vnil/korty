import React from 'react'
import GenerateUrlContainer from '../Containers/GenerateUrlContainer'
import ExistingUrlsContainer from '../Containers/ExistingUrlsContainer'
import './Home.css'

const Home = () => (
  <div className="Home">
    <header>
      <h1>KORTY</h1>
    </header>
    <div className="Home-content">
      <GenerateUrlContainer />
      <ExistingUrlsContainer />
    </div>
  </div>
)

export default Home
