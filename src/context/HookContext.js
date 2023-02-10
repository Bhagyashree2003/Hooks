import { createContext, useState } from "react";

export const HookContext = createContext({});

function HookContextProvider({ children }) {
  const [username, setUsername] = useState("");
  return (
    <HookContext.Provider value={{ username, setUsername }}>
      {children}
    </HookContext.Provider>
  );
}

export default HookContextProvider;
