import React,{Component} from 'react'
import {Link} from 'react-router-dom'
const Button = props => {
    const {kind,...other} = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other}/>;
}

class Jsx extends Component {
    render(){
        return (
            <div>
                <Button kind="primary" onClick={()=> console.log("clicked!")}>Hello World!</Button>
                <Link to="/minigirl">跳转到minigirl</Link>
            </div>
        )
    }
}
export default Jsx