import * as React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading';

import { useLoginRequest } from './hooks';
import { Container, Text } from './styles';
import { getLoginData } from './selectors';

interface Props {
  label: string;
  count: number;
  onIncrement: () => void;
}

const LoginContainer: React.FunctionComponent<Props> = (props: Props) => {
  useLoginRequest();

  const login = useSelector(getLoginData);
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
