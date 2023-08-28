import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
    login: ({ email }) => {
        localStorage.setItem("email", email);
        return Promise.resolve();
    },

    logout: () => {
        localStorage.removeItem("email");
        return Promise.resolve();
    },

    checkError: ({ status }: { status: number}) => {
        if (status == 401 || status == 403) {
            localStorage.removeItem("email");
            return Promise.reject();
        }

        return Promise.resolve();
    },

    checkAuth: () => {
        return (localStorage.getItem("email") ?
            Promise.resolve() : Promise.reject());

    },

    getPermissions: () => Promise.resolve(() => {
        return localStorage.getItem("email") === "admin" ? "admin" : "user";
    })
};