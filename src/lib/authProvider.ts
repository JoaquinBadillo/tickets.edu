// @ts-nocheck
import { AuthProvider } from "react-admin";

const url = import.meta.env.VITE_API_URL || "http://127.0.0.1:1337/api";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    const request = new Request(`${url}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),

      headers: new Headers({ "Content-Type": "application/json" }),
    });

    try {
      const response = await fetch(request);

      if (response.status < 200 || response.status >= 300)
        throw new Error(response.statusText);

      const parsed = await response.json();
      localStorage.setItem("token", parsed.auth);
      localStorage.setItem("role", parsed.role);
      return Promise.resolve();
    } catch {
      return Promise.reject();
    }
  },

  logout: () => {
    if (localStorage.getItem("token"))
      localStorage.removeItem("token");

    if (localStorage.getItem("role"))
      localStorage.removeItem("role");

    return Promise.resolve();
  },

  checkAuth: () => {
    return (
      localStorage.getItem("token") && localStorage.getItem("role") ? 
        Promise.resolve() : 
        Promise.reject()
    );
  },

  checkError: ({ status }: { status: number }) => {
    if (status == null || status == 401 || status == 403) {
      if (localStorage.getItem("token"))
        localStorage.removeItem("token");
      
      if (localStorage.getItem("role"))
        localStorage.removeItem("role");

      return Promise.reject(status ?? 401);
    }

    return Promise.resolve();
  },

  getIdentity: () => {
    try {
      return Promise.resolve(JSON.parse(localStorage.getItem("token")));
    } catch {
      return Promise.reject();
    }
  },

  getPermissions: () => {
    const role = localStorage.getItem("role");
    
    if (!role) {
      if (localStorage.getItem("token")) 
        localStorage.removeItem("token");

      return Promise.reject();
    }
    
    return Promise.resolve(role);
  },
};
