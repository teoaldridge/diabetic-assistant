import apiClient from './api';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
}

interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/login', credentials);
  localStorage.setItem('authToken', response.data.token);
  return response.data;
};

export const logout = (): void => {
  localStorage.removeItem('authToken');
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('authToken');
};
