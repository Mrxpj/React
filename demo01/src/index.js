import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Switch, Link, Route, BrowserRouter} from 'react-router-dom'
import App from './App'
import MiniGirl from './minigirl.js'
import Jsx from './jsx.js'
import Inputs from './form/inputs'
import Selects from './form/selects'
import MulInputs from './form/mulInputs'
import Calcutor from './status/calculator'
class Index extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Jsx}/>
                    <Route exact path='/minigirl' component={MiniGirl}/>
                    <Route exact path='/inputs' component={Inputs}/>
                    <Route exact path='/selects' component={Selects}/>
                    <Route exact path='/mulInputs' component={MulInputs}/>
                    <Route exact path='/calculator' component={Calcutor}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'))