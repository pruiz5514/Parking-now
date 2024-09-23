export interface ISlots {
    id:              string;
    name:            string;
    is_available:    boolean;
    hour_price:      number;
    is_covered:      boolean;
    vehicle_type_id: number;
    owner_id:        string;
    property_id:     string;
    crearted_at:     Date;
    updated_at:      Date;
    delete_at:       null;
    property:        Property;
}

export interface Property {
    id:          string;
    name:        string;
    address:     string;
    description: string;
    image_url:   string;
    commune_id:  number;
    owner_id:    string;
    crearted_at: Date;
    updated_at:  Date;
    delete_at:   null;
    commune:     Commune;
}

export interface Commune {
    id:        number;
    name:      string;
    delete_at: null;
}

export interface ISlotResponse {
    crearted_at:     Date;
    delete_at:       null;
    hour_price:      number;
    id:              string;
    is_available:    boolean;
    is_covered:      boolean;
    name:            string;
    owner_id:        string;
    property_id:     string;
    updated_at:      Date;
    vehicle_type_id: number;
}

export interface IParkingResponse {
    address:     string;
    commune_id:  number;
    crearted_at: Date;
    delete_at:   null;
    description: string;
    id:          string;
    image_url:   string;
    name:        string;
    owner_id:    string;
    slots: ISlotResponse[];
    updated_at:  Date;
}