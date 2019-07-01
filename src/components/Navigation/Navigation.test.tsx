import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Navigation from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navigation brand={'brand'} links={'links'}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
