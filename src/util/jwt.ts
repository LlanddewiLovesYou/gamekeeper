export const getToken = () => {
  return localStorage.getItem("GAMEKEEPER_JWT");
};

export const setToken = (token: string) => {
  localStorage.setItem("GAMEKEEPER_JWT", token);
};
