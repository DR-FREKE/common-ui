"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type TimeContextType = {
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
};

interface TimeContextProviderProps {
  children: React.ReactNode;
}

const TimeContext = createContext<TimeContextType | null>(null);
/** the createContext asks for a default value...
 * now the default value is needed in the case where we wanted
 *  to access the value of the context api from outside the provider
 * then we'd get the default value. for instance, we could set the default value to be home but it is always a very rare case...
 * in this project, we'll just set it to be null */

export const useTimeContext = () => useContext(TimeContext)!;

const TimeContextProvider = ({ children }: TimeContextProviderProps) => {
  const [time, setTime] = useState<string>("00:00");

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
};

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <TimeContextProvider>{children}</TimeContextProvider>;
};

export default ContextProvider;
