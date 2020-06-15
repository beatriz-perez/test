import React, { Component } from 'react'

export default class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.task(event.currentTarget.name, event.currentTarget.value);
    }

    render() {
        const { name, value, labelText, sampleText } = this.props;
        return (
            <div className="inputBox">
                <label htmlFor={name} className="label">
                    {labelText}
                </label>
                <input
                    className="input"
                    type="number"  
                    id={name} 
                    name={name} 
                    value={value} 
                    placeholder={sampleText}
                    onChange={this.handleChange}
                />  
            </div>
        )
    }
}

