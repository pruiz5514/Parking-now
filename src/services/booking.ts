import { IBooking } from "app/types/IBooking";
import { errorAlert, successAlert } from "app/utils/alerts";

export async function createBooking(booking: IBooking, token: string) {
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
            errorAlert("No se puedo realizar la reserva, por favor intente mas tarde");
            throw Error("No se puedo realizar la reserva, por favor intente mas tarde");
        }
    }
    else {
        successAlert("Su reseva se ha activado exitosamente")
    }

    const data = await response.json();
    return data;
}