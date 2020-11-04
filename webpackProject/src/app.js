import React from 'react';
import One from './components/one'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 'app组件',
      flag: true
    }
  }

  render() {
    return (
      <div className='app' >
        {this.state.flag ? <One title={this.state.val}></One> : ''}
        <button onClick={this.click}>点击</button>
      </div >
    )
  }

  click = () => {
    this.setState({
      flag: false
    })
  }
}

export default App 