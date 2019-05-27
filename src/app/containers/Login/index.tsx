import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import { AppState, Action } from '../../types';

import * as actions from './actions';
import { useLoginRequest } from './hooks';
import { Container, Text } from './styles';
import Loading from '../../components/Loading';

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

const LoginContainer: React.FunctionComponent<Props> = props => {
  useLoginRequest();

  const { login } = useSelector((state: AppState) => state);
  const { id, name } = login;

  return (
    <Container>
      <Loading text="hjola" />
      <Text>
        { id } { name }
      </Text>
    </Container>
  );
};

export default LoginContainer;
