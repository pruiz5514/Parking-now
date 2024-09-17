export interface IRegisterUser {
    fullname: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    doc_number: string;
    document_type_id: number | null;
}

export interface IRegisterUserValidation {
    fullname: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
    doc_number: string;
    document_type_id: number | null;
    confirmPassword: string
}


