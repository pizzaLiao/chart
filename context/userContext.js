import React, { createContext, useContext, useState } from "react";

// 建立使用者上下文
const UserContext = createContext();

// 自訂使用者上下文提供者
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// 自訂使用者上下文鉤子
export function useUser() {
  return useContext(UserContext);
}
