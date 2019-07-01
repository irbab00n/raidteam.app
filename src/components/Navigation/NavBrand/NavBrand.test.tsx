import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavBrand from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBrand title="test title"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
