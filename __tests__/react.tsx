import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  render, screen, waitFor, RenderResult, fireEvent,
} from '@testing-library/react';
import store from '../src/client/Store/store';
import MenuContainer from '../src/client/Containers/MenuContainer';
import ActionComponent from '../src/client/Components/ActionComponent';
import ActionContainer from '../src/client/Containers/ActionContainer';
import StatusMessageComponent from '../src/client/Components/StatusMessageComponent';
import App from '../src/client/App';
import '@testing-library/jest-dom';

describe('Menu Container tests', () => {
  let text: RenderResult;

  beforeAll(() => {
    text = render(<StatusMessageComponent statusMessage="What will Squirtle do?" />);
  });

  test('Renders Status Message Container with default message "What will Squirtle do?"', () => {
    // expect(text.textContent).toBe('What will Squirtle do?');
    expect(text.getByText('Squirtle', { exact: false })).toHaveTextContent('Squirtle');
  });
});

let text: RenderResult;
describe('ActionContainer tests', () => {
  beforeEach(() => {
    text = render(
      <Provider store={store}>
        <ActionContainer player={1} isGameOver={false} />
      </Provider>,
    );
  });

  test('Has 4 buttons', () => {
    const items = text.getAllByRole('button');
    expect(items).toHaveLength(4);
  });

  test('Keyboard Event should trigger', () => {
    let button = text.container.querySelector('#Active');
    expect(button).toHaveTextContent('Tackle');

    if (button) fireEvent.keyDown(button, { key: 'ArrowRight' });
    button = text.container.querySelector('#Active');
    expect(button).toHaveTextContent('Flame Thrower');

    if (button) fireEvent.keyDown(button, { key: 'ArrowDown' });
    button = text.container.querySelector('#Active');
    expect(button).toHaveTextContent('Surf');

    if (button) fireEvent.keyDown(button, { key: 'ArrowLeft' });
    button = text.container.querySelector('#Active');
    expect(button).toHaveTextContent('Hydro Pump');

    if (button) fireEvent.keyDown(button, { key: 'ArrowUp' });
    button = text.container.querySelector('#Active');
    expect(button).toHaveTextContent('Tackle');
  });

  test('Keyboard Event should NOT change active button if out of bounds', () => {
    let button = text.container.querySelector('#Active');
    expect(button).toHaveTextContent('Tackle');

    if (button) fireEvent.keyDown(button, { key: 'ArrowLeft' });
    button = text.container.querySelector('#Active');
    expect(button).toHaveTextContent('Tackle');

    if (button) fireEvent.keyDown(button, { key: 'ArrowUp' });
    button = text.container.querySelector('#Active');
    expect(button).toHaveTextContent('Tackle');
  });
});

describe('Testing MenuContainer functionality', () => {
  let text: RenderResult;

  beforeEach(() => {
    text = render(
      <Provider store={store}>
        <MenuContainer isGameOver={false} />
      </Provider>,
    );
  });

  test('Entering move is reflected in status message and cycles correctly', async () => {
    const button = text.container.querySelector('#Active');
    if (button) fireEvent.keyDown(button, { key: 'Enter' });
    expect(text.getByText('Squirtle', { exact: false })).toHaveTextContent('Squirtle used Tackle!');

    await new Promise((e) => setTimeout(e, 2500));
    let statusMessage = text.container.querySelector('.StatusMessageComponent');
    expect(statusMessage).toHaveTextContent('Mew Two used Psybeam!');

    await new Promise((e) => setTimeout(e, 2500));
    statusMessage = text.container.querySelector('.StatusMessageComponent');
    expect(statusMessage).toHaveTextContent('What will Squirtle do?');
  }, 10000);
});

// describe('Testing React-Redux Functionality', () => {
//   let text: RenderResult;

//   beforeEach(() => {
//     text = render(
//       <Provider store={store}>
//         <App />
//       </Provider>,
//     );
//   });

//   test('', () => {

//   });
// });
