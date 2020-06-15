import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class SelectInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.task(event.currentTarget.id, event.currentTarget.value);
    }

    render() {
        const { labelText, media, name, value } = this.props;
        const generateJSX = (item, index) => {
            if (item.queryValue === this.props.compare) {
                return (
                    <option key={index} value={item.queryValue} disabled>{item.name}</option>
                )
            } else {
                return (
                    <option key={index} value={item.queryValue}>{item.name}</option>
                )
            };
        };
        const options = media.map(generateJSX);

        return (
            <div className="inputBox">
                <label htmlFor={name} className="label text__regular">
                    {labelText}
                </label>
                <select className="input" id={name} value={value} onChange={this.handleChange}>
                    {options}
                </select>
            </div>
        )
    }
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    task: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
    media: PropTypes.array.isRequired,
    compare: PropTypes.string.isRequired
}
