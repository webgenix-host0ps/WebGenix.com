import { createContext, useContext } from "react";
import useAdminData from "./useAdminData";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const adminData = useAdminData();

  return (
    <AdminContext.Provider value={adminData}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
