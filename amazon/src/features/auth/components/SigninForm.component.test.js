import { reducer, screen } from '../../../shared/utils/test-utils';

import SigninFormComponent from './SigninForm.component';

describe('Sign-in Form', () => {
  let signInButton = null;

  beforeEach(() => {
    reducer(<SigninFormComponent />);
    signInButton = screen.getByRole('button', { name: /sign-in/i });
  });

  test('The login button should be in the document', () => {
    expect(signInButton);
  });

  test('The login button should initially be disabled', () => {
    expect(signInButton).toBeDisabled();
  });
});
