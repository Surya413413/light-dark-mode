import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {LightMode: true}

  renderSubcribeButton = () => {
    this.setState(prevState => ({LightMode: !prevState.LightMode}))
  }

  render() {
    const {LightMode} = this.state
    const isMode = LightMode ? 'light-mode' : 'dark-mode'
    const paraMode = LightMode ? 'paraBlack' : 'paraWhite' 

    return (
      <div className="bg-container">
        <div className={`second-container ${isMode}`}>
          <h1 className={`headingWelcome ${paraMode}`}>Click To Change Mode</h1>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.renderSubcribeButton}
            >
              {LightMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
