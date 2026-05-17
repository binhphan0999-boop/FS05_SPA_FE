export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    middleName?: string | null;
    avatarUrl?: string | null;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    isAuthenticated: boolean;
    error: string | null;
}