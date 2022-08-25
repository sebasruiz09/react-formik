import React from 'react';
import App from './App';
import { render , hydrate } from 'react-dom';

const rootElement = document.getElementById('root');
if(rootElement.hasChildNodes()){
  hydrate(<App />,rootElement);
}else{
  render(<App />,rootElement );
}