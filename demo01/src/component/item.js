import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    render() { 
        return ( 
            <li onClick={this.handleDelete}>
                {this.props.content}
                <span>删除</span>
            </li>
         );
    }
    handleDelete() {
        this.props.deleteItem(this.props.index)
        console.log(this.props.index)
    }
}
 
export default Item;