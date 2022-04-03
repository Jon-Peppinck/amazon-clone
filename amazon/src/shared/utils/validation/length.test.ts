import { validateNameLength, validatePasswordLength } from './length';

describe('Field length validation', () => {
  describe('Name field', () => {
    let name = '';

    test('a name should fail length validation if it is not set', () => {
      expect(validateNameLength(name)).toEqual(false);
    });

    test('a name should fail length validation if it is less than 2 characters', () => {
      name = 'J';
      expect(validateNameLength(name)).toEqual(false);
    });

    test('a name should pass length validation if it is 2 characters', () => {
      name = 'Jo';
      expect(validateNameLength(name)).toEqual(true);
    });

    test('a name should pass length validation if it is more than 2 characters', () => {
      name = 'Jon';
      expect(validateNameLength(name)).toEqual(true);
    });
  });
  describe('Password field validation', () => {
    let password = '';

    test('a password should fail length validation if it is not set', () => {
      expect(validatePasswordLength(password)).toEqual(false);
    });

    test('a password should fail length validation if it is less than 2 characters', () => {
      password = 'J';
      expect(validatePasswordLength(password)).toEqual(false);
    });

    test('a password should fail length validation if it is more than 20 characters', () => {
      password = 'qwertyuiopqwertyuiopqwertyuiop';
      expect(validatePasswordLength(password)).toEqual(false);
    });

    test('a password should pass length validation if it is 6-20 characters', () => {
      password = 'password';
      expect(validatePasswordLength(password)).toEqual(true);
    });
  });
});
