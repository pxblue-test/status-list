import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {EatonThemes} from '@pxblue/themes/react';

render(
  <MuiThemeProvider theme={createMuiTheme(EatonThemes.blue)}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
