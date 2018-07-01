import React from 'react'
import './PageFooter.css'

const PageFooter = () => (
  <footer>
    <hr />
    <p>
      <span>&copy; Jesse Palmer 2018</span>
      <span className='pull-right'><i className="fa fa-code" aria-hidden="true"></i> with <span className='fa fa-heart' /> from SF</span>
    </p>
  </footer>
)

export default PageFooter
