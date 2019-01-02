import React, {Component} from "react"
import TextArea from './TextArea'
import axios from 'axios'
import Radio from './Radio'
let returnMessage = '';

class FactForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            fact:"",
            topic:"",
            property:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      event.preventDefault();
      let data = {
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        textarea:this.state.textarea,
        topic:this.state.topic,
        property:this.state.property        
      }
      console.log("Entering handleClick Data Object = ",data)

      // put data to db. So it can be access from the alexa app from dynamo db.
      // see function putToDb.js for details
      axios.post('http://localhost:4000/facts', {
        firstName: data.firstName,
        lastName : data.lastName,
        fact : data.textarea,
        topic: data.topic,
        property:data.property
      })
      .then(function (response) {
        const data = JSON.stringify(response.data)
        console.log("Data after post to server: ", data)
        // const content =`<h2>Welcome</h2><p>Your Email ${data.userName} has been recorded.</p>`
        // document.querySelector('#two').innerHTML = content
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    handleTextArea(event) {
      this.setState({ [name] : value })
    }

    handleChange(event) {
      const {name, value, type} = event.target
      type === "radio" ? this.setState({ [name]: value }) : this.setState({ [name]: value })
  }
    
    render() {
        return (
          <div>
            <form className='fact-form'>
              <fieldset>
                <legend> Enter A Fact</legend>
                <h2>Contribute, Tell us who you are.</h2>

                  <label>First Name :</label><br />
                  <input 
                      type="text" 
                      value={this.state.firstName} 
                      name="firstName" 
                      placeholder="First Name" 
                      onChange={this.handleChange} 
                  />

                  <br /><br />
                  <label>Last Name :</label><br />
                  <input 
                      type="text" 
                      value={this.state.lastName} 
                      name="lastName" 
                      placeholder="Last Name" 
                      onChange={this.handleChange} 
                  /><br /><br />

                  <label>Topic
                    <input type="radio"  name="topic" value="css" onChange={this.handleChange} />CSS
                    <input type="radio"  name="topic" value="html" onChange={this.handleChange} />HTML
                  </label><br /><br />

                  <label>Property or Tag</label><br />
                  <input 
                      type="text" 
                      value={this.state.property} 
                      name="property" 
                      placeholder="property or tag" 
                      onChange={this.handleChange} 
                  /><br /><br />

                  <label><h3>Create a fact or a false answer.</h3></label>                  
                  <textarea
                    name='textarea'
                    rows={5}
                    cols = {50}
                    value={this.state.textarea}
                    onChange={this.handleChange}
                    placeholder="Enter Fact"
                  /><br /><br />
                  
                  <button onClick={this.handleClick} className='submit'>Submit</button>
                </fieldset>
              </form>
          </div>
        )
    }
}

export default FactForm;

{/* <TextArea       
                    type="text"            
                    name='fact'
                    value={this.state.fact}
                    rows={5}
                    cols={50}                    
                    onChange={this.handleTextArea}
                    placeholder="Grid is a display property. Known as the grid system."
                    required                      
                  /> */}