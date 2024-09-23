export interface IButton {
    text: string | React.ReactNode;
    onClick?: () => void;
    type?: string;
    disabled?: boolean;
}