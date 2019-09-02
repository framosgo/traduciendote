import * as React from 'react';
import { Container } from './styles';

interface Props {
  text: string;
}

const Loading: React.FC<Props> = ({ text }: Props) => <Container>{ text }</Container>;

export default Loading;
