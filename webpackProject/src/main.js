import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './assets/index.scss'

ReactDOM.render(<App />,
  document.getElementById('root'),
  () => {
    console.log('渲染成功')
  }
)

/*
  生命周期
    constructor  （常）
      组件初始化时会执行当前生命周期，当前生命周期的主要作用是用来存储当前组件所需要的一些状态。状态保存在this.state中

      另外需要特别注意一点，当编写了constructor的时候，必须要谢super，否则this的指向会发生错误

      当前生命周期访问不到this.props,若想要访问需要在constructor和super中传入props


    componentWillMount：挂载前（一次）
      当前生命周期是组件创建前会执行，当前生命周期数据和模板还未结合状态，因此我们可以在当前生命周期中
      对组件的状态进行修改

      尽量不要在当前生命周期中执行this.setState, 因为当前生命周期执行完毕后，下一个生命周期就是render，减少不必要的性能消耗

      除此之外当前生命周期中还可以接受到外部的属性

      在17.0中废除了此声明周期

    render（多次执行）  （常）

      render函数将数据和模板相结合，并在会在缓存中保存一份，当this.state和this.props发生改变的时候
      render函数会将上次缓存结果和这次渲染进行对比（diff算法：新旧两个虚拟dom的对比）

      render函数的渲染次数决定了当前组件的优化程度

    componentDidMount：挂载 （一次）  （常）
      当前生命周期是数据和模板进行结合完毕并且已经挂在到页面上了，在当前生命周期中我们可以访问到真实的dom结构

      如何访问到真实的dom结构？
        1. <h2 ref='属性'></h2>
          this.refs.属性
        2. <h2 ref={el => this.属性 = el}></h2>
          this.属性
      我们可以在当前生命周期中做方法的实例化（swiper，echarts，better-scroll）



    componentWillReceiveProps:（17.0被废除）
      当this.state发生改变的时候回执行当前的生命周期函数，有一个参数为新的props


    shouldComponentUpdate：  （常）
      当this.state和this.props发生改变时会执行当前生命周期，以及react的性能优化也需要在当前生命周期中去做
      当数据发生改变时会执行，当前生命周期必须要返回一个true或者false，如果为true则继续执行下面的生命周期，否则停止执行生命周期

      当前生命周期中会有2个参数，一个是新的state，一个是新的props,  我们可以比较新值和旧值来决定
      return true/false这样可以减少render函数渲染的次数



    componentWillUpdate：更新前（17.0废除掉了）
      此生命周期有2个参数，一个是新的props，一个是新的state，在此周期中对更新的数据做最后的修改或者过滤

      不要再此生命周期中调用this.setState


    componentDidUpdate：更新
      当前声明周期是数据和模板相结合，在当前生命周期中我们可以访问到更新后最新的dom元素
      以及还可以对之前的数据做一个缓存，因为当前声明周期中有2个参数，一个是旧的props，一个是旧的state



    componentWillUnmount：销毁  （常）
      当组件销毁的时候会执行当前生命周期，我们需要在生命周期中做一些销毁操作
      例如：定时器清除，事件移除，事件解绑


  面试题：
    1. react中组件创建时哪些生命周期会执行？
        答：constructor
            componentWillMount
            render
            componentDidMount


    2. react哪些生命周期执行多次，哪些生命周期会执行一次？
        一次：
          constructor
          conponentWillMount
          componentDidMount
          componentWillUnMount

        多次
          componentWillReceiveProps
          shouleComponentUpdate
          componentWillUpdate
          render
          componentDidUpdate


    3. render函数什么时候会执行？
        答：当this.state和this.props发生改变的时候会执行


    4. 当this.state和this.props发生改变后会执行哪些生命周期？
        答： this.state:
              shouleComponentUpdate
              componentWillUpdate
              render
              componentDidUpdate
            this.state:
              componentWillReceiveProps
              shouleComponentUpdate
              componentWillUpdate
              render
              componentDidUpdate


    5. 谈谈你对shouldComponentUpdate的理解，以及性能优化？
        答： 当this.state和this.props发生改变时会执行当前生命周期，以及react的性能优化也需要在当前生命周期中去做
            当数据发生改变时会执行，当前生命周期必须要返回一个true或者false，如果为true则继续执行下面的生命周期，否则停止执行生命周期

            当前生命周期中会有2个参数，一个是新的state，一个是新的props,  我们可以比较新值和旧值来决定
            return true/false这样可以减少render函数渲染的次数


    6. react中ajax数据请求为什么要在componentDidMount中进行，而不再componentWillMount中
        答： 1. 被废除
             2. componentWillMount有可能会造成阻塞的现象，导致组件会渲染多次
             3. componentWillMount在next服务端一般用来进行数据的请求

 */