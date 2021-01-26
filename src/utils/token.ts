import config from 'config';

const storage = localStorage || sessionStorage;

export const setToken = (token: string): void => {
  storage.setItem(config.TOKEN_NAME, token);
};

export const getToken = (): string | null => {
  return storage.getItem(config.TOKEN_NAME);
};
