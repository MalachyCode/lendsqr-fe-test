export interface LoginType {
  email: string;
  password: string;
}

export interface FormInputType {
  name: string;
  type: string;
  value: string;
  id: string;
  label: string;
  placeholder?: string;
  regex?: string;
  errorMessage?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
