import React from 'react';

var arr = [10, 20, 30, 40]

/* function handleClick() {
  console.log('点击了')
} */

class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div>
        {
          arr.map((item, index) => {
            // 调用方法的时候无法使用（）进行传参，会导致自执行后，点击无效
            // 需要用bind改变this
            return <p key={index} onClick={this.handleClick}>{item}</p>
          })
        }
      </div>
    )
  }
  handleClick() {
    console.log(this)
  }
}

export default App 