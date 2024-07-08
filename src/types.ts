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

export interface UsersDataInfoType {
  icon: string;
  name: string;
  total: string;
}

export interface SidebarContentType {
  name: string;
  imgSrc: string;
  imgAlt: string;
  imgClassName: string;
}

export interface SidebarHeaderAndContentType {
  headerName: string;
  contentsData: Array<SidebarContentType>;
}
