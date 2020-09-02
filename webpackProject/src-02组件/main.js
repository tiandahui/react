import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

let demo = <h1>1111</h1>
ReactDOM.render(
  <App />,
  document.getElementById('root'),
  () => {
    console.log('渲染成功')
  }
)

/* ReactDOM.render(
  demo,
  document.getElementById('root'),
  () => {
    console.log('渲染成功')
  }


  react中如何创建组件
     react中通过class关键字来创建组件,React这个对象身上有一个属性Component，这个具有组件的父类
     如果我们想要创建组件的时候必须通过继承这个父类来创建组件

     组件创建时需要注意的地方：
      1： 组件名称必须大写
      2： 组件中必须有render函数，这个函数必须返回一个jsx语法，只能有一个元素


      render是一个生命周期，用来渲染jsx语法以及虚拟DOM的对比，render函数会多次执行，只要this.state或者this.props发生改变就执行

      react中事件的优化
        1：如果在不需要传递参数的情况下，可以将函数在constructor中提前定义，以及提前改变this指向

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
) */
