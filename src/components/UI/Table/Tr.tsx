import { PropsWithChildren } from "react"

const Tr = ({ children }: PropsWithChildren) => {
    return(
        <tr>
            {children}
        </tr>
    )
}

export default Tr