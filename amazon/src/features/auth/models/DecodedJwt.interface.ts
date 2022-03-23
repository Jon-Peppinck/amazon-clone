import { DisplayUser } from './DisplayUser.interface';

export interface DecodedJwt {
  user: DisplayUser;
  exp: number;
  iat: number;
}
