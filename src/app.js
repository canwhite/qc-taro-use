/* eslint-disable react/no-unused-state */
import { Component } from 'react'
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <div>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default App
