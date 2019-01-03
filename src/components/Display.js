import React from 'react'
import facts from './posts'

const Display = () => {
    return (
      <div className='display'>
        <h3>Add to the database by entering a definition.</h3><br />
        <p> 
          visit the project on <a href="https://github.com/marxtrader/rockland-web-dev" target="_blank">GitHub</a>
        </p>
        <h4>Todo's html</h4>
        <ul>
          <li>Reset form after submission</li>
          <li>set status to 'success' after submission</li>
          <li>replace this panel with statistics on current database</li>
        </ul>
        <h4>Todo's Alexa</h4>
        <ul>
          <li>write a function that will return a random fact</li>
          <li>capture the device id</li>
          <li>keep track of correct responses.</li>
        </ul>
      </div>
    )
}
export default Display;

