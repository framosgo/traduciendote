import { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { postRequest } from "../api";

export const useLogin = () => {
  // const [login, setLogin] = useState([]);
  // const dispatch = useDispatch();
  // dispatch(actions.loginRequest('1', '2'));

  useEffect(() => {
    dispatch(actions.loginRequest("1", "2"));

    /*    const loginRequest = async () => {
      const res = await postRequest('user', 'pass');
      const { message } = res;
      setLogin(message);
    };
    loginRequest(); */
  }, []);

  // return [login, setLogin];
};
