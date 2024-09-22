import { PropsWithChildren } from "react"

const Th = ({ children }: PropsWithChildren) => {
    return(
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            {children}
        </th>
    )
}

export default Th