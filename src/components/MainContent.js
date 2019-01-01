import React from 'react'
import TextArea from './TextArea'
import TextInput from './TextInput'
import Button from './Button'
import MyForm from './MyForm'
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
      <TextInput />
    </div>
  )
}
export default MainContent;