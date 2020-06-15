import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {

    render() {
        const {media:{name, website}} = this.props;

        return (
            <footer className="footer" id="footer" role="contentinfo">
                <p className="text text__base">
                    code by
                    <a
                        className="text text__base text__base--bold"
                        href="https://beatriz-perez.github.io/Index/"
                        title="go to Beatriz's"
                        target="_blank"
                        rel="noopener noreferrer"
                    > Beatriz </a>
                    for 
                <a
                    className="text text__base text__base--bold"
                    href={website}
                    title={`go to ${name} website`}
                    target="_blank"
                    rel="noopener noreferrer"
                > ElevenYellow </a>
                    with 
                    <i className="loveIcon far fa-heart"></i>
                </p>
            </footer>
        );
    }
}

Footer.propTypes = {
    media: PropTypes.object.isRequired
}