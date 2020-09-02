import React, { Component } from 'react'
// import observer from '../observer'

export default class Three extends Component {
  constructor() {
    super()
  }
  // send = () => {
  //   observer.$emit('handleSendTwo', 'three组件')
  // }
  render() {
    return (
      <div className='three'>
        <h2>three组件</h2>
        <button onClick={this.send}>发送给two组件</button>
      </div>
    )
  }
}
