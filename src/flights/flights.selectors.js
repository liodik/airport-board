import { createSelector } from 'reselect';

export const directionSelector = state => state.flights.direction;

const flightsListSelector = state => state.flights.flightsList;

export const filteredFlightsListSelector = createSelector([flightsListSelector], flightsList => {
  return Object.values(
    flightsList.reduce((acc, cur) => Object.assign(acc, { [cur.flight]: cur }), {})
  );
});
