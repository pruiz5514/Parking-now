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
    documentType: DocumentType;
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
    documentType: DocumentType;
    phone_number: string;
    address: string;
    doc_number: string;
    role_id: number;
}

export interface DocumentType {
    id: number;
    name: string;
    delete_at?: null;
}
