import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/store';
import MenuContainer from './Containers/MenuContainer';

const App = () => {
  return (
    <div>
      <MenuContainer />
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
