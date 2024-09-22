import { PropsWithChildren } from "react";

const TableContaier = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section className="bg-white rounded-lg p-6 overflow-x-auto overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg" >
          {children}
      </section>
    </>
    
  );
};

export default TableContaier;