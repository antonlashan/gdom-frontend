interface IAuthProvider {
    isAuthenticated: boolean;
    email: null | string;
    signin(email: string): Promise<void>;
    signout(): Promise<void>;
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider: IAuthProvider = {
    isAuthenticated: false,
    email: null,
    async signin(email: string) {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        fakeAuthProvider.isAuthenticated = true;
        fakeAuthProvider.email = email;
    },
    async signout() {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        fakeAuthProvider.isAuthenticated = false;
        fakeAuthProvider.email = '';
    },
};
