import React, { FunctionComponent, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import { AppState, Action } from '../../types';

import * as actions from './actions';
import { useLoginRequest } from './hooks';
import { Container, Text } from './styles';

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

const LoginContainer: FunctionComponent<Props> = props => {
  useLoginRequest();

  const login = useSelector((state: AppState) => state.login);
  const { id, name } = login;

  return (
    <Container>
      <Text>
        { id } { name }
      </Text>
    </Container>
  );
};

export default LoginContainer;
