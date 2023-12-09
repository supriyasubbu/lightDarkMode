// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  changeLight = () => {
    this.setState(previousState => ({isDark: !previousState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const backGroundColor = isDark ? 'dark-mode' : 'light-mode'
    const buttonTextChange = isDark ? 'light mode' : 'dark mode'

    return (
      <div className="background-container">
        <div className={`container ${backGroundColor}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.changeLight} className="mode-btn">
            {buttonTextChange}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
