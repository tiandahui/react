import React, { Component } from 'react'
// import observer from '../observer'

export default class Two extends Component {
  constructor() {
    super()
    // observer.$on('handleSendTwo', (params) => {
    //   console.log(params)
    // })
  }
  render() {
    return (
      <div className='two'>
        <h2>two组件</h2>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
  handleClick = () => {
    this.props.handle('two组件信息')
  }
}
