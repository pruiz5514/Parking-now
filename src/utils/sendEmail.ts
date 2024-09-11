import { FormEvent, RefObject } from 'react';
import emailjs from '@emailjs/browser';
import { errorAlert, successAlert } from './alerts';

export const sendEmail = (formRef: RefObject<HTMLFormElement>, service: string, template: string, pk: string, alert: string): void => {
    if (formRef.current) {

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