// FIXME
import { http, envConf } from '../../../../base';

export const postRequest = async (user: string, password: string): Promise<any> => {
  try {
    const { data } = await http.get(`${ envConf.API.LOGIN_GET }`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
