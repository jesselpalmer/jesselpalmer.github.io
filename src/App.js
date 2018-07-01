import React from 'react'
import './App.css'

import { PageHeader, PageFooter, Books, ContactMe, Presentations, SocialNetworks,
        Tagline } from './components'

const App = () => (
  <div className='container'>
    <PageHeader />
    <Tagline />
    <Books />
    <Presentations />
    <SocialNetworks />
    <ContactMe />
    <PageFooter />
  </div>
)

export default App
