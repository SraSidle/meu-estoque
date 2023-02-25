import { ReactNode } from "react";

export interface allProviderProps {
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
