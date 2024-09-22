export interface IInput {
    label?: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    id: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ElementType;
    name?: string;
    min?: string;
    max?: string;
    key?: string | number
    defaultValue?: string
}