export interface UserAuthenticated{
    jwttoken: string;
    name: string;
    login: string;
    email: string;
    admin: boolean;
}