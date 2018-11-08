import React, { PureComponent } from 'react';
import { fetchJson } from 'helpers';
import styled from 'styled-components';

import FlightCategories from 'components/FlightCategories';
import Table from 'components/Table';
import FlightSearch from './components/FlightSearch';
import Spinner from 'components/Loader';

class App extends PureComponent {
    state = {
        flights: [],
        search: '',
        activeCategory: 'departures'
    };

    async componentDidMount() {
        await this.fetchFlights();
    }

    async componentDidUpdate(_, prevState) {
        if (prevState.activeCategory !== this.state.activeCategory) {
            await this.fetchFlights();
        }
    }

    fetchFlights = async (category = this.state.activeCategory) => {
        const fetchedFlights = await fetchJson(`/flights?type=${category}`);

        this.setState({
            flights: fetchedFlights,
        });
    };

    handleSearch = number => this.setState({ search: number });

    handleChangeFlightCategory = category => {
        this.setState({ activeCategory: category });
    };

    render() {
        const { flights, search, activeCategory } = this.state;

        const filteredFlights = flights.filter(({ flight: { number } }) =>
            number.includes(search)
        );

        if (flights.length === 0) {
            return <Spinner />;
        }

        return (
            <AppContainer>
                <FlightCategories
                    activeCategory={activeCategory}
                    handleChangeCategory={this.handleChangeFlightCategory}
                />

                <FlightSearch
                    search={search}
                    handleSearch={this.handleSearch}
                />

                {filteredFlights.length === 0 ? (
                    <SearchEmpty>Your search returned no results.</SearchEmpty>
                ) : (
                    <Table flights={filteredFlights} />
                )}
            </AppContainer>
        );
    }
}

const AppContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 35px;
    height: 100vh;
`;

const SearchEmpty = styled.h2`
    color: #ffac02;
`;

export default App;
