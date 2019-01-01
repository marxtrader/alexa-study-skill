  import React from 'react'

  class Radio extends React.Component {

    constructor() {
      super()
      this.state = {
          selectedOption: "Fact"
      }
    }

    handleChange(event) {
      this.setState({
          selectedOption: event.target.value
      })
    }

    render () {
      return (
        <div>
          <div className="radio">
              <label>
                <input type="radio" value="Fact" name="questionType"/>
                Fact
              </label>
          {/* </div>
          <div className="radio"> */}
            <label>
              <input type="radio" value="False" name="questionType" />
              False
            </label><br /><br />
          </div>
        </div>
      )
    }
  }
  export default Radio;
  