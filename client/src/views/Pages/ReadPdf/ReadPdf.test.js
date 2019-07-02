import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ReadPdf from './ReadPdf';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ReadPdf/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
