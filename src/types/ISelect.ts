import { PropsWithChildren } from "react";

export interface ISelect {
    name: string
    id: string
    defaultValue: string
    children: React.ReactNode
}