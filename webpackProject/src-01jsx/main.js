import React from 'react'
import ReactDOM from 'react-dom'

/*
  v-text

let massege = 'hello'
let demo = <h2> {massege} </h2>
  

  v-html

let massege = <h2>hello</h2>
let demo = <div> {massege} </div>


  v-show

let flag = false
let demo = <div>{flag ? 1 : 2}</div>

  v-if
  v-else

let flag = true
let demo = <div>
  {flag ? <h2>111</h2> : <h2>222</h2>}
  <h2 style={{ display: flag ? 'block' : 'none' }}>3333</h2>
  <h2 style={{ display: !flag ? 'block' : 'none' }}>44444</h2>
</div>

  v-bind
  v-on
  v-model
  v-for

  在react中不能通过class来编写类名，只能通过classname来进行编写
  以及form表单中的for也不能在进行使用，而是改成htmlFor
*/



let url = 'www.baidu.com'
let demo = <div>
  <a href={url} > baidu </a>
  <img src="" alt="" className='abc' />
  <label htmlFor="box" ></label>
</div>



ReactDOM.render(
  demo,
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
     react中通过class来创建组件
) */