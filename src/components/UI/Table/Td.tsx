import { PropsWithChildren } from "react"

const Td = ({ children }: PropsWithChildren) => {
    return(
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {children}
        </td>
    )
}

export default Td