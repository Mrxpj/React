import React,{Component} from 'react'

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil</p>
}

/**度数转换 */
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**类型处理 */
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) /1000;
    return rounded.toString();
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

class TempertureInput extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''}
    }
    handleChange(e) {
        this.setState({
            temperature: e.target.value
        })
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange}></input>
            </fieldset>
        )
    }
}

class Calculator extends Component {
    render(){
        return(
            <div>
                <TempertureInput scale="c"></TempertureInput>
                <TempertureInput scale="f"></TempertureInput>
            </div>
        )
    }
}
export default Calculator