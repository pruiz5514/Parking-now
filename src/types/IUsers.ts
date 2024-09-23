export interface IUsers {
    id: string;
    fullname: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    doc_number: string;
    isActive: boolean;
    role_id: number;
    document_type_id: number;
    resetPasswordToken: null;
    created_at: Date;
    updated_at: Date;
    delete_at: null;
}

export interface IUpdateUser {
    id?: string;
    fullname: string;
    email: string;
    password: string;
    document_type_id: number;
    phone_number: string;
    address: string;
    doc_number: string;
    role_id: number;
}