export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isLoggedIn: boolean;
}

export interface ProfileState {
  user?: User;
  error: boolean;
}
