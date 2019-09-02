import { RootState } from 'base/types';

export const getLoginData = ({ login: { isFetching, ...login } }: RootState) => login;

export const isFetchingLogin = ({ login }: RootState) => login.isFetching;
