import { RegisterFormField } from './RegisterFormField.interface';

export type NewUser = Omit<RegisterFormField, 'confirmPassword'>;
