export interface IToken {
    success: boolean;
    decode: Decode;
}

export interface Decode {
    email: string;
    role_id: number;
    user_id: string;
    iat: number;
    exp: number;
}
