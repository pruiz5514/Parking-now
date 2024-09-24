export interface ICreateBooking {
    start_date_time: string;
    vehicle_plate: string;
    slot_id: string;
}


export interface IEndBooking {
    end_date_time: string;
    booking_id: string;
}

export interface IEndBookingResponse {
    success: boolean;
    statusCode: number;
    data: Data;
    timestamp: Date;
    path: string;
}

export interface Data {
    amount: number;
    totalHours: number;
}
export interface IBookingActive {
    bookingId: string;
    slotId: string;
    property: Property;
}

export interface Property {
    id: string;
    name: string;
    address: string;
    description: string;
    image_url: string;
    commune_id: number;
    owner_id: string;
    created_at: Date;
    updated_at: Date;
    delete_at: null |Date;
}