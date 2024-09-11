export interface IForm {
    title: string;
    headerContent?: React.ReactNode;
    children?: React.ReactNode
    footerContent?: React.ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    ref?: React.RefObject<HTMLFormElement>;
}