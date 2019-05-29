import { http, envConf } from 'base';
import { LoginModel } from '../models';

export const postRequest = async (): Promise<LoginModel> => {
  try {
    const { data } = await http.get(`${ envConf.API.LOGIN_GET }`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
