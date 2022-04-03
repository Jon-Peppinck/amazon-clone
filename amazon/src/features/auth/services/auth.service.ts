import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { DecodedJwt } from '../models/DecodedJwt.interface';

import { DisplayUser } from '../models/DisplayUser.interface';
import { Jwt } from '../models/Jwt';
import { LoginUser } from '../models/LoginUser.interface';
import { NewUser } from '../models/NewUser';

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/register`,
    newUser
  );

  return response.data;
};

const login = async (
  user: LoginUser
): Promise<{ jwt: Jwt; user: DisplayUser | null }> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/login`,
    user
  );

  if (response.data) {
    localStorage.setItem('jwt', JSON.stringify(response.data));

    const decodedJwt: DecodedJwt = jwt_decode(response.data.token);
    localStorage.setItem('user', JSON.stringify(decodedJwt.user));
    return { jwt: response.data, user: decodedJwt.user };
  }
  return { jwt: response.data, user: null };
};

const logout = (): void => {
  localStorage.removeItem('user');
  localStorage.removeItem('jwt');
};

const verifyJwt = async (jwt: string): Promise<boolean> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/verify-jwt`,
    { jwt }
  );

  if (response.data) {
    const jwtExpirationMs = response.data.exp * 1000;
    return jwtExpirationMs > Date.now();
  }

  return false;
};

const authService = {
  register,
  login,
  logout,
  verifyJwt,
};

export default authService;
