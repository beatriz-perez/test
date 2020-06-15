import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Ranking extends Component {

    render() {
        const {info:{apiInfo, selection: {to}}, media} = this.props;
        const generateJSX = (item, index) => {
            const name = item[0].toLowerCase();
            const price = item[1];
            const logo = media[name];
            const position = index + 1;

            let placePin;
            switch (position) {
                case 1:
                    placePin = 
                        <p className="comparisonLine__position button button__color3 text__medium--bold">
                            <i className="icon1 fas fa-award"></i>{position}
                        </p>;
                    break;
                case 2:
                    placePin = 
                        <p className="comparisonLine__position button button__color2 text__medium--bold">
                            <i className="icon2 fas fa-award"></i>{position}
                        </p>;
                    break;
                case 3:
                    placePin = 
                        <p className="comparisonLine__position button button__color2 text__medium--bold">
                            <i className="icon3 fas fa-award"></i>{position}
                        </p>;
            
                    break;
                default:
                    placePin = 
                        <p className="comparisonLine__position button button__color1 text__medium--bold">
                            {position}
                        </p>;

            }

            return (
                <li key={index} className="comparisonLine">
                    <Link className="comparisonLine__box text text__medium" to={`/compare/detail/${name}`}>
                        <img className="comparisonLine__logo" src={logo} alt={`${name.toLowerCase()} logo`}/>
                        <p className="comparisonLine__name text__medium--bold">{name.toLowerCase()}</p>
                        <p className="comparisonLine__price">{price}</p>
                        {placePin}
                    </Link>
                </li>
            )
        };

        const ordered = Object.entries(apiInfo).sort((a, b) => a[1] > b[1] ? -1 : 1);
        const results = ordered.map(generateJSX);

        return (
            <div className="ranking">
                <h3 className="ranking__title title">rates ranking</h3>
                <ul >
                    <li className="comparisonLine">
                        <div className="comparisonLine__box text text__medium">
                            <i className="comparisonLine__logo fas fa-wallet"></i>
                            <p className="comparisonLine__name text__medium--bold"></p>
                            <p className="comparisonLine__price">{to}</p>
                            <p className="comparisonLine__position text__medium--bold">ranking position</p>
                        </div>
                    </li>
                    {results}
                </ul>
            </div>
        )
    }
}

Ranking.propTypes = {
    info: PropTypes.object.isRequired,
    media: PropTypes.object.isRequired,
}
