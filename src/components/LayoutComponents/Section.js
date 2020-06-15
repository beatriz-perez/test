import React from 'react';
import PropTypes from 'prop-types';

export default class Section extends React.Component {

    render() {
        return (
            <section className="main" id={this.props.id} role={this.props.role}>
                <div className="mainBox" >
                    {this.props.children}          
                </div>
            </section>
        );
    }
}
Section.defaultProps = {
    id: 'main',
    role: 'main content'
}
Section.propTypes = {
    id: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}