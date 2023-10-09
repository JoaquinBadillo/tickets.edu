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
      return Promise.resolve();
    } catch {
      throw new Error("Error en el login");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  },

  checkError: ({ status }: { status: number }) => {
    if (status == 401 || status == 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }

    return Promise.resolve();
  },

  getIdentity: () => {
    try {
      return Promise.resolve(JSON.parse(localStorage.getItem("identity")));
    } catch {
      return Promise.reject();
    }
  },

  getPermissions: () => {
    try {
      return Promise.resolve("admin");
    } catch {
      return Promise.reject();
    }
  },
};
