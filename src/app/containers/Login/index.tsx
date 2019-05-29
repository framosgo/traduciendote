import * as React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading/index';
import { AppState } from '../../types/index';

import { useLoginRequest } from './hooks/index';
import { Container, Text } from './styles';

interface Props {
  label: string;
  count: number;
  onIncrement: () => void;
}

const LoginContainer: React.FunctionComponent<Props> = (props: Props) => {
  useLoginRequest();

  const { login } = useSelector((state: AppState): AppState => state);
  const { id, name } = login;
  const { label, count } = props;

  return (
    <Container>
      <Loading text="hola" />
      <Text>
        { label } { count }
      </Text>
      <Text>
        { id } { name }
      </Text>
    </Container>
  );
};

export default LoginContainer;
