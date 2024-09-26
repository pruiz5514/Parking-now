import { ICreateBooking, IEndBooking } from "app/types/IBooking";
import { errorAlert, successAlert } from "app/utils/alerts";

export async function createBooking(booking: ICreateBooking, token: string) {
    const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(booking)
    })

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error message:', errorData.message);

        if (response.status !== 201) {
            throw Error("Ya existe una reserva en progreso");
        }
    }
    else {
        successAlert("Su reseva se ha activado exitosamente")
    }

    const data = await response.json();
    return data;
}

export async function getBookinginProgressDriver(token:string) {

    const response = await fetch("/api/booking/booking-in-progress-driver", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();
    

 
    return data.data;
}

export async function endBooking(endbooking: IEndBooking, token: string) {
    const response = await fetch('/api/booking/end-booking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(endbooking)
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('Error message:', data.message);
        errorAlert("No se pudo finalizar la reserva, por favor intente más tarde");
        throw new Error("No se pudo finalizar la reserva, por favor intente más tarde");
    }

    return data;
}


export async function terminateBooking(token: string) {
    const response = await fetch('/api/booking/end-booking', {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error message:', errorData.message);

        if (response.status !== 200) {
            errorAlert("No se pudo terminar la reserva, por favor intente más tarde");
            throw Error("No se pudo terminar la reserva, por favor intente más tarde");
        }
    }
    else {
        successAlert("Su reseva se ha terminado, confirma")
    }

    const data = await response.json();
    return data;
}