import { FLIGHTS_DATA_RECEIVED, FLIGHTS_DIRECTION_RECEIVED } from './flights.actions';

const initiaState = {
  flightsList: [],
  direction: 'departures',
};

const flightsReducer = (state = initiaState, action) => {
  switch (action.type) {
    case FLIGHTS_DATA_RECEIVED:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };

    case FLIGHTS_DIRECTION_RECEIVED:
      return {
        ...state,
        direction: action.payload.direction,
      };

    default:
      return state;
  }
};

export default flightsReducer;
