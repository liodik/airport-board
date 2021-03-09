import * as flightsGateway from './flights.gateway';

export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS_DATA_RECEIVED';
export const FLIGHTS_DIRECTION_RECEIVED = 'FLIGHTS_DIRECTION_RECEIVED';

export const flightsDataReceived = flightsList => {
  return {
    type: FLIGHTS_DATA_RECEIVED,
    payload: {
      flightsList,
    },
  };
};

export const getFlightDirection = direction => {
  return {
    type: FLIGHTS_DIRECTION_RECEIVED,
    payload: {
      direction,
    },
  };
};

export const getFlightsList = direction => {
  const flightDirection = direction === 'departures' ? 'departure' : 'arrival';
  const thukAction = function (dispatch) {
    flightsGateway.fetchFlightsData().then(flightsList =>
      dispatch(
        flightsDataReceived(
          flightsList[flightDirection].map(item => {
            return {
              id: item.ID,
              terminal: item.term,
              localTime: item.actual,
              destination: item['airportFromID.name_en'] || item['airportToID.name_en'],
              status: item.status,
              companyLogo: item.airline.en.logoName,
              companyName: item.airline.en.name,
              flight: item.codeShareData[0].codeShare,
            };
          })
        )
      )
    );
  };
  return thukAction;
};
