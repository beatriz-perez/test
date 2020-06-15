import React, { Component } from 'react'

//Datos:
import externalResourcesList from '../data/resources.json';

// Componentes:
import LandingPageBody from './LandingComponents/LandingPageBody';
import Footer from './LayoutComponents/Footer';

export default class LandingPage extends Component {
    render() {
        const {externalResourcesList:{media}} = externalResourcesList;

        return (
            <React.Fragment>
                <LandingPageBody/>
                <Footer media={media}/>
            </React.Fragment>
        )
    }
}
