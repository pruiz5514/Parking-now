export interface ISelect {
    name: string
    id: string
    defaultValue: string
    children: React.ReactNode,
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}