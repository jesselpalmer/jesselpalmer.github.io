import React from 'react'

const WebApps = props => (
  <dl>
    <dt><h3>{props.sectionTitle}</h3></dt>
    <dd><span className='fa fa-gamepad' />&nbsp;
      <a href='http://jesselpalmer.com/labs/brickbreaker'>Brick Breaker</a>
      (<span className='fa fa-file-code-o' />&nbsp;
      <a href='http://github.com/jesselpalmer/brick-breaker'>Source Code</a>)
    </dd>
    <dd><span className='fa fa-gamepad' />&nbsp;
      <a href='http://jesselpalmer.com/labs/paddlebattle'>Paddle Battle</a>
      (<span className='fa fa-file-code-o' />&nbsp;
      <a href='http://github.com/jesselpalmer/paddle-battle'>Source Code</a>)
    </dd>
    <dd><span className='fa fa-gamepad' />&nbsp;
      <a href='http://jesselpalmer.com/labs/hangman'>Hangman</a>
      (<span className='fa fa-file-code-o' />&nbsp;
      <a href='http://github.com/jesselpalmer/hangman'>Source Code</a>)
    </dd>
    <dd>
      <span className='fa fa-map' />&nbsp;
      <a href='http://distance-finder.appspot.com/'>Distance Finder</a>
      (<span className='fa fa-file-code-o' />&nbsp;
      <a href='http://github.com/jesselpalmer/distance-finder'>Source Code</a>)
    </dd>
  </dl>
)

export default WebApps
