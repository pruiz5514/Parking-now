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