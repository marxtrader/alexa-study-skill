import React, {Component} from "react"
import TextArea from './TextArea'

class TextInput extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            fact:"",
            type:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      event.preventDefault();
      const {firstName, lastName, fact, type} = event.target
      console.log(event)
      console.log(event.target)
      console.log(firstName, lastName, fact, type)
    }
    
    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
    
    render() {
        return (
          <div>
            <form onClick={this.handleClick}>
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

                  {/* <label>
                    <input 
                        type="checkbox" 
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Is friendly?
                  </label> */}
                  
                  {/* <p>Facts will be used for making a statement. False statements will be used in true and false questions</p> */}
                  <label><h3>Create a fact or a false answer.</h3></label>
                  <TextArea                   
                    name={'fact'}
                    rows={5}
                    cols={50}  
                    placeholder="Grid is a display property. Known as the grid system."
                    required  
                    onChange={this.handleChange}
                  />
                  <div className="radio">
                  <label> 
                      <input 
                        type="radio" 
                        name="questionType" 
                        checked={this.state.checked}
                        onChange={this.handleChange}
                      />Fact</label>

                    <label> 
                      <input type="radio" 
                        name="questionType" 
                        checked={this.state.checked}
                        onChange={this.handleChange}
                      />False</label><br /><br />
                  </div>
                  <button>Submit</button>
                </fieldset>
              </form>
          </div>
        )
    }
}

export default TextInput
