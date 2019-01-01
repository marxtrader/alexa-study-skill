import React from 'react'
import TextInput from './TextInput'
import TextArea from './TextArea'
import Button from './Button'
import Radio from './Radio'

class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      type:true,
      firstName:"",
      lastName:"",
      fact:""
    }
  }

  render() {

    return (
      <div>
        <form>
          <TextInput />
          
        </form>
      </div>
    )
  }
}
export default Form;