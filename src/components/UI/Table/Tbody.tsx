import { PropsWithChildren } from "react"

const Tbody = ({ children }: PropsWithChildren) => {
    return(
        <tbody className="divide-y divide-gray-200">
            {children}
        </tbody>
    )
}

export default Tbody