import React, {
  Component
} from 'react';

class One extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      message: '2020'
    }
  }
  componentWillMount() {
    // this.state.message = 1000
    console.log('componentWillMount')
  }
  render() {
    let { message } = this.state
    console.log('render')
    return (
      <div className='one'>
        {/* <h2 ref='h2'> {message} </h2> */}
        <h2 ref={el => this.h2 = el}> {message} </h2>
        <button onClick={this.handleModify}>修改数据</button>
      </div>
    );
  }
  handleModify = () => {
    this.setState({
      message: 2015
    })
  }
  componentDidMount(oldProps, oldState) {
    // console.log(this.h2)
    console.log('componentDidMount')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(newProps, newState) {
    if (newState.message === this.state.message) return false
    return true
  }
  componentWillUpdate(newProps, newState) {
    console.log(newProps, newState)
    console.log('componentWillUpdate')
    newState.message = 3000
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

export default One;

// let fn = (element) => {
//   return this.h2 = element
// }