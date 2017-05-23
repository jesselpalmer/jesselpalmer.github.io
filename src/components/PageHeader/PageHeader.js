import React from 'react'

const PageHeader = () => (
  <header>
    <h1>
      <a href='http://jesselpalmer.com'>Jesse Palmer</a>
      <img id='mug' className='pull-right' src='./img/mug.png' alt='Jesse Palmer' width='100' />
    </h1>
    <hr />
    <nav id='top-nav'>
      <a href='#Writing'>Writing</a> |&nbsp;
      <a href='#Speaking'>Speaking</a> |&nbsp;
      <a href='#Open Source'>Open Source</a> |&nbsp;
      <a href='#Social Networks'>Social Networks</a> |&nbsp;
      <a href='#Contact Me'>Contact Me</a>
    </nav>
  </header>
)

export default PageHeader
