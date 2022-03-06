import AuthLayout from '../features/auth/components/AuthLayout';
import RegistrationFormComponent from '../features/auth/components/RegistrationForm.component';

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegistrationFormComponent />
    </AuthLayout>
  );
};

export default RegisterPage;
