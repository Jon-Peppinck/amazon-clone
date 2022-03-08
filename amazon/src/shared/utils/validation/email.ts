import { ValidatorFn } from './models/ValidatorFn';

export const validateEmail: ValidatorFn = (email: string): boolean => {
  // RFC2822
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return re.test(email.trim());
};
