// authUtils.ts
export interface Credentials {
    username: string;
    password: string;
  }
  
  let registeredCredentials: Credentials | null = null;
  
  export const setRegisteredCredentials = (credentials: Credentials) => {
    registeredCredentials = credentials;
  };
  
  export const getRegisteredCredentials = (): Credentials | null => {
    return registeredCredentials;
  };
  