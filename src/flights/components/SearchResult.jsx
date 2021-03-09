import React, { useEffect } from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as flightsActions from '../flights.actions';
import { filteredFlightsListSelector } from '../flights.selectors';

import SearchResultBody from './SearchResultBody';

const SearchResult = ({ flightData, getFlightsList, getFlightDirection }) => {
  const { direction } = useParams();

  const searchData = qs.parse(useLocation().search, {
    ignoreQueryPrefix: true,
  }).search;
  let flightsList;
  if (!searchData) {
    flightsList = flightData;
  } else {
    flightsList = flightData.filter(
      flight =>
        flight.flight === searchData.toUpperCase() ||
        flight.destination.toLocaleLowerCase() === searchData.toLocaleLowerCase()
    );
  }
  useEffect(() => {
    getFlightsList(direction);
    getFlightDirection(direction);
  }, [direction]);

  if (!flightsList || flightsList.length === 0) {
    return <div className="results-container__text">No Flight</div>;
  } else {
    return (
      <div className="results-container">
        <table className="results-container-table">
          <thead className="results-container-table__title">
            <tr>
              <th
                className="results-container-table__title-item
                    results-container-table__title-terminal"
              >
                Terminal
              </th>
              <th
                className="results-container-table__title-item                
              results-container-table__title-time"
              >
                Local time
              </th>
              <th
                className="results-container-table__title-item
                     results-container-table__title-destination"
              >
                Destination
              </th>
              <th
                className="results-container-table__title-item
                     results-container-table__title-status"
              >
                Status
              </th>
              <th
                className="results-container-table__title-item
                     results-container-table__title-airline"
              >
                Airline
              </th>
              <th
                className="results-container-table__title-item
                     results-container-table__title-flight"
              >
                Flight
              </th>
            </tr>
          </thead>
          <tbody className="results-container__body">
            {flightsList.map(flight => (
              <SearchResultBody key={flight.id} {...flight} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

const mapState = state => {
  return {
    flightData: filteredFlightsListSelector(state),
  };
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
  getFlightDirection: flightsActions.getFlightDirection,
};

SearchResult.propTypes = {
  flightData: PropTypes.array.isRequired,
  getFlightsList: PropTypes.func.isRequired,
  getFlightDirection: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(SearchResult);
