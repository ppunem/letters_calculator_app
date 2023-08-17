// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeWord = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <div className="text-calculation-container">
          <div className="container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="user-value">
              <label htmlFor="userInput">Enter the phrase</label>
              <input
                type="text"
                id="userInput"
                placeholder="Enter the phrase"
                onChange={this.changeWord}
              />
            </div>
            <p className="result">No.of letters: {count}</p>
          </div>
          <div>
            <img
              src="
https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
