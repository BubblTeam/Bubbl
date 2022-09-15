import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  render, screen, waitFor, RenderResult,
} from '@testing-library/react';
import store from '../src/client/Store/store';
import MenuContainer from '../src/client/Containers/MenuContainer';
import ActionComponent from '../src/client/Components/ActionComponent';
import ActionContainer from '../src/client/Containers/ActionContainer';
import StatusMessageComponent from '../src/client/Components/StatusMessageComponent';
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

describe('ActionContainer tests', () => {
  let text: RenderResult;

  beforeAll(() => {
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
});
