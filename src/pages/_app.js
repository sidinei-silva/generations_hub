/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import GlobalStyle from '../styles/global';

import theme from '../theme';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <StylesProvider injectFirst>
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}
