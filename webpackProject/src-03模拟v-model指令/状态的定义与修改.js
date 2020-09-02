import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: '2020',
      n: 1
    }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div>
        <h2 id='h2'>{this.state.message}</h2>
        <h2>{this.state.n}</h2>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
  handleClick() {
    // react是单向数据流，故数据改变时，页面不会立即改变
    // this.state.message = 1996

    // this.setState({
    //   message: 1000
    // }, () => {
    //   console.log(this.state.message)
    //   console.log(document.getElementById('h2').innerText)
    // })

    // this.setState((state) => {
    //   return {
    //     message: 1000
    //   }
    //   return {
    //     message: state.message.split('').reverse().join('')
    //   }
    // })

    this.setState({
      n: ++this.state.n
    })
    // this.setState({
    //   n: this.state.n++
    // })
  }
}

export default App 