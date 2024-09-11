import { FormEvent, RefObject } from 'react';
import emailjs from '@emailjs/browser';

export const sendEmail = (formRef: RefObject<HTMLFormElement>, service: string, template: string, pk: string): void => {
    if (formRef.current) {

        emailjs.sendForm(service, template, formRef.current, pk)
            .then(
                () => {
                    console.log('¡ÉXITO!');
                },
                (error) => {
                    console.log('FALLÓ...', error.text);
                }
            );
    }
};