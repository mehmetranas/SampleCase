import { createContext, useReducer, useContext } from "react";

const UserContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "login": {
      return { name: "Mehmet" };
    }
    case "logout": {
      return {};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {});
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useAuth() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a CountProvider");
  }
  return context;
}

export { UserProvider, useAuth };
