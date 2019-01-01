import React, {Component} from "react"

class TextInput extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState(prevState => ({
            [prevState.name]: prevState.value
        }))
    }
    
    render() {
        return (
          <div>
              <label>First Name :</label><br />
              <input 
                  type="text" 
                  value={this.state.firstName} 
                  name="firstName" 
                  placeholder="First Name" 
                  onChange={this.handleChange} 
              />
              <br />
              <label>Last Name :</label><br />
              <input 
                  type="text" 
                  value={this.state.lastName} 
                  name="lastName" 
                  placeholder="Last Name" 
                  onChange={this.handleChange} 
              />
          </div>
        )
    }
}

export default TextInput
