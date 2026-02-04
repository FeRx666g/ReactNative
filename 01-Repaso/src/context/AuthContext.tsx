import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";

const AuthStatus = {
    checking: 'checking',
    authenticated: 'authenticated',
    unauthenticated: 'unauthenticated'
} as const;

type AuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus];

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [state, setState] = useState<AuthStatus>(
        AuthStatus.checking
    )

    useEffect(() => {
        setTimeout(() => {
            setState(AuthStatus.unauthenticated)
        }, 3000);
    }, [])

    return (
        <AuthContext.Provider value={{
            status: state
        }}>
            {children}
        </AuthContext.Provider>
    )
}