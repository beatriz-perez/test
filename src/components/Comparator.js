import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

//Datos:
import externalResourcesList from '../data/resources.json';

//Servicios:
import { fetchApiInfo } from '../services/APIservice';

// Componentes:
import Header from './LayoutComponents/Header';
import Section from './LayoutComponents/Section';
import Footer from './LayoutComponents/Footer';

import Form from './ComparatorComponents/Form';
import Ranking from './ComparatorComponents/Ranking';
import Deatil from './ComparatorComponents/Deatil';


export default class Comparator extends Component {
    constructor(props) {
        super(props);
        this.changeSelection = this.changeSelection.bind(this);
        this.fetchInfo = this.fetchInfo.bind(this);
        this.state = {
            apiInfo: {},
            selection: {
                from: 'LTC',
                to: 'BTC',
                amount: 1
            }
        }
    }

    componentDidMount() {
        const savedState = JSON.parse(localStorage.getItem('mylocalinfo'));
        if (!savedState) {
            this.fetchInfo();
        } else {
            this.setState(savedState);
        }
    }
    componentDidUpdate() {
        localStorage.setItem('mylocalinfo', JSON.stringify(this.state));
    }

    fetchInfo() {
        let pairQueryFrom = this.state.selection.from;
        let pairQueryTo = this.state.selection.to;
        let amountQuery = this.state.selection.amount;
        fetchApiInfo(pairQueryFrom, pairQueryTo, amountQuery)
            .then(data => { this.setState({ apiInfo: data }); })
            .catch((error) => { console.log(error); });
    }

    changeSelection(name, value) {
        const newSelection = this.state.selection;
        newSelection[name] = value;
        this.setState({ selection: newSelection })
        this.fetchInfo();
    };

    render() {
        const {externalResourcesList:{walletLogos, currencyOptions, media}} = externalResourcesList;

        return (
            <React.Fragment>
                <Header/>
                <Section id="main" role="main content">
                    <Form info={this.state.selection} media={currencyOptions} task={this.changeSelection} />
                    <Switch>

                        <Route exact path="/compare">
                            <Ranking info={this.state} media={walletLogos} />
                        </Route>

                        <Route
                            path="/compare/detail/:name"
                            render={routerProps => <Deatil match={routerProps.match} info={this.state} media={walletLogos} />}
                        />

                    </Switch>
                </Section>
                <Footer media={media}/>
            </React.Fragment>
        )
    }
}
