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
