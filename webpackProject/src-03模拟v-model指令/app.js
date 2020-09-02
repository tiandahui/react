import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      inputVal: '123',
      radioVal: '男',
      checkboxVal: [],
      selectVal: '桃子'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleRadioCharge = this.handleRadioCharge.bind(this)
    this.handleCheckCharge = this.handleCheckCharge.bind(this)
    this.handleSelectCharge = this.handleSelectCharge.bind(this)
  }

  render() {
    let { inputVal, radioVal, checkboxVal, selectVal } = this.state
    return (
      <div>
        <input type="text" value={inputVal} onChange={this.handleClick} />
        <p>{inputVal}</p>
        <hr />
        男：<input type="radio" value='男' checked={radioVal === '男'} onChange={this.handleRadioCharge} />
        女：<input type="radio" value='女' checked={radioVal === '女'} onChange={this.handleRadioCharge} />
        <p>性别： {radioVal}</p>
        <hr />
        <label>抽烟：</label>
        <input type="checkbox" value='抽烟' onChange={this.handleCheckCharge} />
        <label>喝酒：</label>
        <input type="checkbox" value='喝酒' onChange={this.handleCheckCharge} />
        <label>烫头：</label>
        <input type="checkbox" value='烫头' onChange={this.handleCheckCharge} />
        {
          checkboxVal.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
        <hr />
        <select onChange={this.handleSelectCharge}>
          <option value="苹果">苹果</option>
          <option value="香蕉">香蕉</option>
          <option value="桃子">桃子</option>
          <option value="橙子">橙子</option>
          <option value="梨">梨</option>
        </select>
        <p>你选择的是：{selectVal}</p>
      </div>
    )
  }
  handleClick(e) {
    let val = e.target.value
    this.setState({
      inputVal: val
    })
    console.log(e.target.value)
  }
  handleRadioCharge(e) {
    let val = e.target.value
    this.setState({
      radioVal: val
    })
  }
  handleCheckCharge(e) {
    let val = e.target.value
    let arr = this.state.checkboxVal

    let flag = arr.includes(val)
    if (flag) {
      // 移除
      let index = arr.indexOf(val)
      arr.splice(index, 1)
    } else {
      // 添加
      arr.push(val)
    }
    this.setState({
      checkboxVal: arr
    })
  }
  handleSelectCharge(e) {
    let val = e.target.value
    this.setState({
      selectVal: val
    })
  }
}

export default App 