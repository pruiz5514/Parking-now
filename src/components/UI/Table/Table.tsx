import { PropsWithChildren } from "react";

const Table = ({ children }: PropsWithChildren) => {
  return (
      <table className=" min-w-full divide-y divide-gray-300">
        {children}
      </table>
    
  );
};

export default Table;