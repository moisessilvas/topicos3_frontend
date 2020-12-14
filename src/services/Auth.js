export const user_token = "user_token";
export const user_id = "user_id";

export const isAuthenticated = () => localStorage.getItem(user_token) !== null;

export const getToken = () => localStorage.getItem(user_token);

export const login = token => {
  localStorage.setItem(user_token, token);
};

export const logout = () => {
  localStorage.removeItem(user_token);
};

export const login_id = _id => {
  localStorage.setItem(user_id, _id );
};