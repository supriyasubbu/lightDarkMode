// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  changeLight = () => {
    const {isDark} = this.state
    this.setState({isDark: !isDark})
  }

  render() {
    let mode
    const {isDark} = this.state

    const modeText = isDark
      ? ((mode = 'dark-mode'), 'light Mode')
      : ((mode = 'light-mode'), 'Dark Mode')
    return (
      <div className="background-container">
        <div className={mode}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" onClick={this.changeLight} className="mode-btn">
            {modeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
