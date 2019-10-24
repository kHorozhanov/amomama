import Axios from 'axios-observable';
import { ENV } from '../../constants';

export const Http = Axios.create({
  baseURL: ENV.API_ROOT
});
