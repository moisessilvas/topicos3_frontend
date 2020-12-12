export const user_token = "user_token";

export const isAuthenticated = () => localStorage.getItem(user_token) !== null;

export const getToken = () => localStorage.getItem(user_token);

export const login = token => {
  localStorage.setItem(user_token, token);
};

export const logout = () => {
  localStorage.removeItem(user_token);
};