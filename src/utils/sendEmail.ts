import { FormEvent, RefObject } from 'react';
import emailjs from '@emailjs/browser';
import { errorAlert, successAlert } from './alerts';

export const sendEmail = (formRef: RefObject<HTMLFormElement>, service: string, template: string, pk: string, alert: string, token?: string): void => {
    if (formRef.current) {
        if (token) {
            const hiddenTokenInput = formRef.current.querySelector('input[name="token"]') as HTMLInputElement;
            hiddenTokenInput.value = `https://parking-now.vercel.app/forgot-password/reset-password?pn=${token}`;
        }

        emailjs.sendForm(service, template, formRef.current, pk)
            .then(
                () => {
                    console.log('¡ÉXITO!');
                    successAlert(alert)
                },
                (error) => {
                    console.log('FALLÓ...', error.text);
                    errorAlert("No se pudo enviar email")
                }
            );
    }
};