export interface User {
    id:number;
    name:string;
    login:string;
    password:string;
    email:string;
    admin:boolean;  
    token?:string;
}
