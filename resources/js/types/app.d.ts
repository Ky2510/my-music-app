export interface IProfile {
    id: number;
    avatar?: string;
    user: IUser;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    profile?: IProfile;
}
export interface ILogin {
    username: string;
    password: string;
}
export interface IRegister {
    fullname: string;
    username: string;
    email: string;
    password: string;
}

export interface Music {
    id: number;
    title: string;
    artist: string;
    album: string;
    cover: string;
    path: string;
}
