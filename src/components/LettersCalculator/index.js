import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countTheLettersEntered = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="calculator-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="calculator-image"
          alt="letters calculator"
        />
        <div className="calculation-container">
          <h1 className="calculator-heading">
            Calculate the Letters you enter
          </h1>
          <p className="calculator-para">Enter the phrase</p>
          <input
            type="text"
            className="input-word-box"
            placeholder="Enter the phrase"
            onChange={this.countTheLettersEntered}
          />
          <p className="display-letter-count">
            No.of letters: <span className="span-count">{count}</span>
          </p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
