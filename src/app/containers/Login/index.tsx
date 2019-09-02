import * as React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading';

import { useLoginRequest } from './hooks';
import { Container, Text } from './styles';
import { getLoginData, isFetchingLogin } from './selectors';

const LoginContainer: React.FunctionComponent = () => {
  useLoginRequest();

  const { id, name } = useSelector(getLoginData);
  const isLoading = useSelector(isFetchingLogin);

  return (
    <Container>
      { isLoading && <Loading /> }
      <Text>
        { id } { name }
      </Text>
    </Container>
  );
};

export default LoginContainer;
