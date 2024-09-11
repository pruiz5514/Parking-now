export interface ITextArea {
    label: string;
    id: string;
    required?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
}