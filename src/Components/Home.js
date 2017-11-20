import React, { Component } from 'react'
import GenerateUrl from './GenerateUrl'
import GeneratedUrls from './GeneratedUrls'
import './Home.css'

const Home = () => (
  <div className="Home">
    <header className="Home-header">
      <h1>KORTY</h1>
    </header>
    <div className="Home-content">
      <GenerateUrl />
      <GeneratedUrls mappedUrls={[
        {kortyCode: 'abc', targetUrl: 'http://www.longy.com'},
        {kortyCode: 'abc', targetUrl: 'http://www.longy.com/adsfssfeijns efjnifsnjifsenjefsnjife snjiefnjifesn ijfesnijfsenijfse'},
      ]} />
    </div>
  </div>
)

export default Home
