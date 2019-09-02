import styled, { createGlobalStyle } from 'styled-components';

import { TABLET } from 'app/styles/media-queries';
import { HEADER_SIZE, HEADER_SIZE_TABLET } from 'app/styles/sizes';
import { PRIMARY_BACKGROUND } from 'app/styles/skin';
import getLayerPosition from 'app/styles/z-index';

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
    overflow: hidden;
  }

  a:link,
  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
`;

export const AppWrapper = styled.main`
  background-color: ${ PRIMARY_BACKGROUND };
  min-height: calc(100vh - ${ HEADER_SIZE }rem);
  z-index: ${ getLayerPosition('CONTENT') };

  ${ TABLET } {
    min-height: calc(100vh - ${ HEADER_SIZE_TABLET }rem);
  }
`;
