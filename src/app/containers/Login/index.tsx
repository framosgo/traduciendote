import React, { FunctionComponent } from "react";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { AppState, Action } from "../../types";

import * as actions from "./actions";
import { useLogin } from "./hooks";
import { Container, Text } from "./styles";

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

const LoginContainer: FunctionComponent<Props> = props => {
  const dispatch = useDispatch();
  const selector = useSelector((state: AppState) => state);
  dispatch(actions.loginRequest("1", "2"));
  dispatch(actions.loginError("1", "2"));

  return (
    <Container>
      <Text>hola </Text>
    </Container>
  );
};

export default LoginContainer;
