import styled from 'styled-components';
import { TABLET } from 'app/styles/media-queries';
import { TEXT_COLOR } from 'app/styles/skin';

export const Container = styled.div`
  padding: 1rem;

  ${ TABLET } {
    padding: 2rem;
  }
`;

export const Text = styled.span`
  color: ${ TEXT_COLOR };
`;
