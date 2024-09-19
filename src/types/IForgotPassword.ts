export interface IForgotPassword {
    email: string
}

export interface IResetPassword {
    resetPasswordToken: string | null,
    password: string
}
