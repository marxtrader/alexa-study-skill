  import React from 'react'

  class Radio extends React.Component {

    constructor() {
      super()
      this.state = {
          selectedOption: ""
      }
    }

    handleChange(event) {
      console.log(event.target.value)
      this.setState({
          selectedOption: event.target.value

      })
    }

    render () {
      return (
        <div>
          <div className="radio">
              <label>
                <input 
                  type="radio" 
                  value={this.state.selectedOption} 
                  name="topic" 
                  onChange={this.handleChange}
                  topic='css'
                />css
              </label>
              <label>
                <input 
                  type="radio" 
                  value={this.state.selectedOption} 
                  name="topic" 
                  onChange={this.handleChange} 
                  topic="html"
                />html
              </label><br /><br />
          </div>
        </div>
      )
    }
  }
  export default Radio;
  