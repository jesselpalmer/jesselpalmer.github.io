import React from 'react'
import './App.css'

import { PageHeader, PageFooter, Books, ContactMe, OpenSourceContributions, Presentations, SocialNetworks,
        Tagline } from './components'

const App = () => (
  <div className='container'>
    <PageHeader />
    <Tagline />
    <Books />
    <Presentations />
    <OpenSourceContributions />
    <SocialNetworks />
    <ContactMe />
    <PageFooter />
  </div>
)

export default App
