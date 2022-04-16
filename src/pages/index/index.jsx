import React,{ Component } from 'react'
import { View, Text ,Button } from '@tarojs/components'
import './index.scss'
import { navigateTo } from '@tarojs/router' 
import Taro from '@tarojs/taro'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:""
    }
    this.txt = React.createRef()
  }

  componentWillMount () { 
    console.log("Mount");
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  //受控组价测试
  handleChange(e) {
    //受控
    this.setState({
      inputValue:e.target.value
    })  
  } 

  //非受控组件测试
  handleClick = ()=>{
    // this.txt.current.focus()
    console.log("==",this.txt.current.value);

    /* Taro.request({
      url,
      data: method === 'POST' ? JSON.stringify(data) : data,
      method,
      header: { 'Content-Type': 'application/json' }
    }) */
  }




  //跳转到其他组件
  handleRouterChange = () => {
    //我们测试一下跳转
    Taro.navigateTo({
      url: '/pages/helper/index'
    })
  }

  render () {
    //隐藏
    return (
      <View className='index'>
        {/* --受控组件-- */}
        <p><input type='text' placeholder='受控组件' onChange={this.handleChange.bind(this)} defaultValue={this.state.inputValue} /></p>
        <text>{this.state.inputValue}</text>
        {/* --非受控组件，通过ref拿值-- */}
        <p>
          <input ref={this.txt} placeholder='非受控组件' />
          <button style={{marginLeft:5}} onClick={this.handleClick}>输出</button>
        </p>
        {/* 引入一下taro UI，在这里使用一个Button */}
        <Button type='primary' onClick={this.handleRouterChange}>
          helper跳转
        </Button>


      </View>
    )
  }
}
