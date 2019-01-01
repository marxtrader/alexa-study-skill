import React from 'react'
import facts from './posts'

const Display = () => {
    return (
      <div>
        <h4>Use this Alexa Skill to reinforce definitions, tags and css properties. Being a contributor will also assist in remembering. This app can be converted to any topic. Enjoy.</h4><br />
        <p>Simple to use.</p>
        <ul>
          <li>enable the skill from your alexa app.</li>
          <li>Invoke the skill with any of the following:</li>
          <ol>
            <li>Alexa, ask rockland web dev for a fact</li>
            <li>Alexa, tell rockland web dev to test me</li>
            <li>Alexa, ask rockland web dev to quiz me.</li>
          </ol>
        </ul>
        <p>If you would like to be a contributor, styling, code, what ever... visit the project on <a href="www.github.com/marxtrader/web-dev-tutor.git" target="_blank">GitHub</a></p>
        <h4>Todo's</h4>
        <ul>
          <li>create a quiz of 5 or so questions</li>
          <ul>
            <li>keep a running score in the db.</li>
            <li>create an intent to return the score</li>
          </ul>
        </ul>
      </div>
    )
}
export default Display;

