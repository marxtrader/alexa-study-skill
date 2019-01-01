import React from 'react'
import facts from './posts'

const Display = () => {
  console.log(facts)

    return (
      <div>
        <h1>This is where we will display current items in the database</h1>
        <ul>
          {facts.map(fact => <li><h4>{fact.title}</h4><p>{fact.body}</p></li>)}
        </ul>
      </div>
    )
}
export default Display;

