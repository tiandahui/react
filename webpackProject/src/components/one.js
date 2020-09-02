import React, { Component } from 'react';
import Three from './three'

class One extends Component {
  constructor() {
    super()
  }
  click = () => {
    console.log(this)
  }
  render() {
    return (
      <div className='one'>
        <h2 onClick={this.click}>one组件</h2>
        <h3>接收信息为：{this.props.info}</h3>
        <Three></Three>
      </div>
    );
  }
}

export default One;
