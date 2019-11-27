import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Switch, Link, Route, BrowserRouter} from 'react-router-dom'
import App from './App'
import MiniGirl from './minigirl.js'
import Jsx from './jsx.js'

class Index extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Jsx}/>
                    <Route exact path='/minigirl/:n' component={MiniGirl}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'))