import React, { Component } from 'react'
import PropTypes from 'prop-types';

// Componentes:
import SelectInput from './FormComponents/SelectInput';
import NumberInput from './FormComponents/NumberInput';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.preventSubmit = this.preventSubmit.bind(this);
    }

    preventSubmit(event) {
        event.preventDefault();
    }

    render() {
        const {info:{amount, from, to}, media, task} = this.props;
        const selectedFrom = media.filter( item => item.queryValue === from)[0];
        const selectedTo = media.filter( item => item.queryValue === to)[0];

        return (
            <form className="formBox text">
                <h3 className="form__title title">query info</h3>
                <div className="form__selection">
                    <img 
                        className="currencyLogo" 
                        src={selectedFrom.logo} 
                        alt={`${selectedFrom.name} logo`}
                    />
                    <i 
                        className="changeIcon fas fa-exchange-alt"
                    ></i>
                    <img 
                        className="currencyLogo" 
                        src={selectedTo.logo} 
                        alt={`${selectedTo.name} logo`}
                    />
                </div>
                <SelectInput     
                    name="from" 
                    value={from} 
                    task={task}
                    media={media}
                    labelText="from"
                    compare={to}
                />
                <SelectInput    
                    name="to" 
                    value={to} 
                    task={task}
                    media={media}
                    labelText="to"
                    compare={from}
                />
                <NumberInput
                    name="amount" 
                    value={amount} 
                    task={task} 
                    labelText="amount"
                    sampleText="1"
                />
            </form>
        )
    }
}

Form.propTypes = {
    info: PropTypes.object.isRequired,
    media: PropTypes.array.isRequired,
    task: PropTypes.func.isRequired
}