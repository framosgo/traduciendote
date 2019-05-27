import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postRequest } from '../api';
import * as actions from '../actions';

export const useLoginRequest = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.loginRequest('1', '2'));
  }, []);
};
