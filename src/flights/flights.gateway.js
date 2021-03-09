import moment from 'moment';
const today = moment().format('DD-MM-YYYY');

export const fetchFlightsData = () => {
  return fetch(`https://api.iev.aero/api/flights/${today}`).then(response => {
    if (response.ok) {
      return response.json().then(flightsData => flightsData.body);
    }
    throw new Error('Server not response');
  });
};
