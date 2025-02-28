"use client";

import { ReactNode, createContext, useContext } from 'react';
import { useTawkTo } from '@/hooks/useTawkTo';

// Create a context to share the tawk.to functionality
const TawkToContext = createContext<ReturnType<typeof useTawkTo> | undefined>(undefined);

export const useTawkToContext = () => {
  const context = useContext(TawkToContext);
  if (context === undefined) {
    throw new Error('useTawkToContext must be used within a TawkToProvider');
  }
  return context;
};

type TawkToProviderProps = {
  children: ReactNode;
};

export const TawkToProvider = ({ children }: TawkToProviderProps) => {
  const tawkToUtils = useTawkTo();

  return (
    <TawkToContext.Provider value={tawkToUtils}>
      {children}
    </TawkToContext.Provider>
  );
};

export default TawkToProvider; 