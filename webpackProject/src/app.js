import React from 'react';
import One from './components/one'
import Two from './components/two'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      appInfo: '我是父组件',
      twoInfo: ''
    }
  }

  render() {
    let { appInfo: info } = this.state
    return (
      <div className='app' >
        <h2>app组件</h2>
        <h3>接受到子组件信息为：{this.state.twoInfo}</h3>
        <One info={info}></One>
        <Two handle={this.handleMessage}></Two>
      </div >
    )
  }
  handleMessage = (info) => {
    console.log(info)
    console.log(this)
    this.setState({
      twoInfo: info
    })
  }
}

export default App 