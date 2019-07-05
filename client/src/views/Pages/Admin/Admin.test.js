import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Admin from './Admin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Admin/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
