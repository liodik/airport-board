import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchDirectionBtn from './flights/components/SearchDirectionBtn';
import SearchInput from './flights/components/SearchInput';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <SearchInput />
        <SearchDirectionBtn />
      </Router>
    </Provider>
  );
};
export default App;
