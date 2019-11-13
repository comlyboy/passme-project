export interface IUser {
    email: string,
    first_login: boolean,
    first_name: string,
    id: number,
    is_employee: boolean,
    is_owner: boolean,
    last_name: string,
    middle_name: string,
    username: string
}


export interface ILogin {
    email: string;
    password: string;
}


export interface ISignup {
    email: string;
    password: string;
}
