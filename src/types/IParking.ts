export interface IParkings {
    id: string;
    name: string;
    address: string;
    description: string;
    image_url: string;
    commune_id: number;
    owner_id: string;
    crearted_at: Date;
    updated_at: Date;
    delete_at: Date;
}
