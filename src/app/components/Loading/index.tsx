import React, { FunctionComponent } from "react";
import { Container } from "./styles";

type Props = {
  text: string;
};

const Loading: FunctionComponent<Props> = props => {
  const { text } = props;
  return <Container>{text}</Container>;
};

export default Loading;
