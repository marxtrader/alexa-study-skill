import React from 'react'
import TextArea from './TextArea'
import TextInput from './TextInput'
import Button from './Button'
// import Form from './Form'
import "../App.css";
// import "../bootstrap.css"
var Lorem = require('react-lorem-component');

const MainContent = () => {

  const handleSubmit = (e) => {
    console.log("event : ", e)
  }

  return (
    <div>
      <form>
        <h2>Contribute, Tell us who you are.</h2>
          <TextInput />
          <h3>Create a fact or a false answer.</h3>
          <p>Facts will be used for making a statement. False statements will be used in true and false questions</p>
          <TextArea 
            name={'textarea'}
            rows={5}
            cols={50}
          />
        <Button />
      </form>
    </div>
  )
}
export default MainContent;