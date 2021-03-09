import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { directionSelector } from '../flights.selectors';

const SearchInput = ({ direction }) => {
  const [searchData, setSearchData] = useState('');
  const isDirection = direction ? direction : 'departures';

  const searchParam = searchData ? `?search=${searchData}` : '';
  return (
    <div className="search">
      <h2 className="search__title">Search flight</h2>
      <div className="search-container">
        <form className="search-container__form" action="">
          <i className="fa fa-search"></i>
          <input
            className="search-container__input"
            type="text"
            placeholder="flyight # or destination"
            value={searchData}
            onChange={e => setSearchData(e.target.value)}
          ></input>
        </form>
        <div className="search-container__button-wrap">
          <Link to={`/flights/${isDirection}${searchParam}`}>
            <button className="search-container__button">Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    direction: directionSelector(state),
  };
};

SearchInput.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default connect(mapState)(SearchInput);
