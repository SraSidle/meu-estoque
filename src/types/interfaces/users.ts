import { ReactNode } from "react";

export interface AllProviderProps {
  children: ReactNode;
}

export interface Auth {
  token: string;
  user: CurrentUser;
}

export interface AuthProviderData {
  logged: boolean;
  login: (params: Auth) => void;
  logout: () => void;
  currentUser: Auth | undefined;
}
export interface ProductsProviderData {
  products: ProductProps[];
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  searchTerm: string;
  updateModal: boolean;
  setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteProduct: (id: number) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CurrentUser {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  updatedAt: string;
}

export interface DataType {
  name?: string;
  email?: string;
  password?: string;
  isAdmin?: boolean;
}

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: string;
  department: string;
  amount: number;
  description: string;
  adress: string;
  distance: string;
}