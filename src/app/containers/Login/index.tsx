import * as React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading';

import { useLoginRequest } from './hooks';
import { Container, Text } from './styles';
import { getLoginData } from './selectors';

const LoginContainer: React.FunctionComponent = () => {
  useLoginRequest();

  const login = useSelector(getLoginData);
  const { id, name, isFetching } = login;

  return (
    <Container>
      { isFetching && <Loading /> }
      <Text>
        { id } { name }
      </Text>
    </Container>
  );
};

export default LoginContainer;
