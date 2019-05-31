import React, { FunctionComponent } from 'react';
import { Container } from './styles';

interface Props {
  text: string;
}

const Loading: FunctionComponent<Props> = (props: Props) => {
  const { text } = props;
  return <Container>{ text }</Container>;
};

export default Loading;
