export const checkPasswordCoincidence = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
}

export const checkPassword = (password: string) => {
    const regex: RegExp = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/;
    return regex.test(password) && password.length > 7;
}