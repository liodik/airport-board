import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';

const SearchResultBody = ({
  terminal,
  localTime,
  destination,
  status,
  companyLogo,
  companyName,
  flight,
}) => {
  const time = moment(localTime).format('h : mm');
  return (
    <>
      <tr>
        <td
          className={classNames('results-container-table__title-terminal', {
            'terminal-a': terminal === 'A',
            'terminal-d': terminal === 'D',
          })}
        >
          <div
            className={classNames(
              'results-container-table__title-terminal-wrap',

              {
                'terminal-a': terminal === 'A',
                'terminal-d': terminal === 'D',
              }
            )}
          >
            {terminal}
          </div>
        </td>
        <td
          className="
                  results-container-table__title-time"
        >
          {time}
        </td>
        <td
          className="
                  results-container-table__title-destination"
        >
          {destination}
        </td>
        <td
          className="
                  results-container-table__title-status"
        >
          {status}
        </td>
        <td
          className="
                  results-container-table__title-airline"
        >
          <img className="company-name__logo" src={companyLogo} alt="logo" />
          <span className="company-name__name">{companyName}</span>
        </td>
        <td
          className="
                  results-container-table__title-flight"
        >
          {flight}
        </td>
      </tr>
    </>
  );
};

SearchResultBody.propTypes = {
  terminal: PropTypes.string,
  localTime: PropTypes.string,
  destination: PropTypes.string,
  status: PropTypes.string,
  companyLogo: PropTypes.string,
  companyName: PropTypes.string,
  flight: PropTypes.string,
};

export default SearchResultBody;
