import { createContext, useContext } from 'react';

interface AppContextProps {
  name: string;
  age: number;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('AppContext must be used within a ContextProvider!');
  }
  return context;
};
