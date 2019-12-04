import React,{Component,Fragment} from 'react'
import {Link} from 'react-router-dom'
import Item from './component/item'

class miniGirl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: '',
            list: ['基础服务','头部按摩','拔罐']
        }
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputVal} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <div>{this.props.match.params.n}</div>
                    <ul>
                        {
                            this.state.list.map((item,index)=> {
                                return (
                                    <Item content = {item} 
                                          key = {index+item} 
                                          index = {index}
                                          deleteItem = {this.deleteItem.bind(this)}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <Link to="/">跳转到jsx</Link>
            </Fragment>
        )
    }
    inputChange(e) {
        // console.log(this);
        this.setState({
            inputVal: e.target.value
        })
    }
    //增加服务列表
    addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            // list: this.state.list.concat(this.state.inputVal), //这个也可用
            inputVal: ''
        })
    }
    //删除列表服务
    deleteItem(index){
        console.log(index)
        let list = this.state.list  //注意，不建议直接操作state里的数据
        list.splice(index,1)
        this.setState({
           list: list
        })
    }
}
export default miniGirl