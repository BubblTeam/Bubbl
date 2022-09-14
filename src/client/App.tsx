import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import MenuContainer from './Containers/MenuContainer';
import HealthBox from './Components/HealthComponent';

const App = () => {
  return (
    <div>
      <MenuContainer />
      <HealthBox />
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
