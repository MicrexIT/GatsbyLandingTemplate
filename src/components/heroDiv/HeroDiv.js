import React, { Component } from 'react'
import getWindowHeight from './getWindowHeight'
import convertStyle from './convertStyle'

class Div100vh extends Component {
  state = {
    style: {}
  }

  // On mount and window resize converts rvh values to px (if there are any).
  // Also, adds `height: 100rvh` if height is not specified at all
  updateStyle = () => {
    if (!this.props.dontResize) {
      const convertedStyle = convertStyle(this.props.style, getWindowHeight())
      this.setState({ style: convertedStyle })
    }
  }

  componentDidMount() {
    this.updateStyle()
    window.addEventListener('resize', this.updateStyle)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStyle)
  }

  render() {
    const { dontResize, ...otherProps } = this.props
    return <div {...otherProps} style={this.state.style} />
  }
}

export default Div100vh
