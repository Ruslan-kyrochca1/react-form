import { FormEvent } from 'react';

export type HandleSubmitType = (email: string, password: string) => void;
export type RegisterSubmitType = (name: string, text: string, email: string, sex: string, password: string) => void;

export type InputType = {
  placeholder?: string;
  name: string;
  description: string;
  error?: string;
  type: React.HTMLInputTypeAttribute;
  label: string | number;
  required?: boolean;
  variant?: VariantType;
  radius?: RadiusType;
  size?: 'x-small' | 'small' | 'medium' | 'large';
  withAsterisk?: boolean;
  disabled?: boolean;
  inputId: string;
};

export type ButtonType = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export type VariantType = 'default' | 'filled' | 'unstyled';
export type RadiusType = 'xs' | 'sm' | 'md' | 'lg' | undefined;
