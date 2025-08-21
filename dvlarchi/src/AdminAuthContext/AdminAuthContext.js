import React, { createContext, useState, useEffect } from "react";

export const AdminAuthContext = createContext();

const AdminAuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const login = (adminData) => {
    localStorage.setItem("admin", JSON.stringify(adminData));
    setIsAdminLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    setIsAdminLoggedIn(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminLoggedIn, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
