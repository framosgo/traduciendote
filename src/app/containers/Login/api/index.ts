import { http, envConf } from 'base';

export const postRequest = async (): Promise<any> => {
  try {
    const { data } = await http.get(`${ envConf.API.LOGIN_GET }`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
