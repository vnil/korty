import React from 'react'
import GenerateUrl from './GenerateUrl'
import ExistingUrlsContainer from '../Containers/ExistingUrlsContainer'
import './Home.css'

const Home = () => (
  <div className="Home">
    <header>
      <h1>KORTY</h1>
    </header>
    <div className="Home-content">
      <GenerateUrl />
      <ExistingUrlsContainer />
    </div>
  </div>
)

export default Home
