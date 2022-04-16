import React,{ Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

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
  //加一个handleChange的方法
  handleChange(e) {
    //受控
    this.setState({
      inputValue:e.target.value
    })  
  } 

  //handleClick
  handleClick = ()=>{
    // this.txt.current.focus()
    console.log("txt",this.txt.current.value);
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
      </View>
    )
  }
}
