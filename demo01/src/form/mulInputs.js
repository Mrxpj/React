/**受控组件 */
/** 处理多个input时，根据event.target.name的值来选择要执行的操作*/
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class MulInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        console.log(event.target);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
        /**等价于 
         * var partialState = {}
         * partialState[name] = value
         * this.setState(partialState)
        */
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    参与:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}></input>
                </label>
                <br />
                <label>
                    来宾人数:
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange}></input>
                </label>
            </form>
        )
    }
}

export default MulInputs