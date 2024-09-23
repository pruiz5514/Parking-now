"use client";
import './users.css';
import Header from "app/components/Header/Header";
import Button from 'app/components/UI/Button/Button';
import Table from 'app/components/UI/Table/Table';
import Tbody from 'app/components/UI/Table/Tbody';
import Td from 'app/components/UI/Table/Td';
import Th from 'app/components/UI/Table/Th';
import Thead from 'app/components/UI/Table/Thead';
import Tr from 'app/components/UI/Table/Tr';
import Link from "next/link";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { deleteUserById, getUsers } from 'app/services/users';
import { IUsers } from 'app/types/IUsers';
import TableContaier from 'app/components/UI/Table/TableContainer';
import Spinner from 'app/components/Spinner/Spinner';
import { confirmAlert } from 'app/utils/alerts';
import { useRouter } from 'next/navigation';


const User = () => {
  const router = useRouter();
  const [users, setUsers] = useState<IUsers[]>([]);
  const [loading, setLoading] = useState(true); 

  const cookieToken = Cookies.get("token");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      if (cookieToken) {
        const fetchedUsers = await getUsers(cookieToken);
        setUsers(fetchedUsers);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();  
  }, []);

  const deleteUser = async (event: React.MouseEvent<HTMLButtonElement>) =>{
    const id = String(event.currentTarget.getAttribute("user-id"));
    if(cookieToken){
        confirmAlert(deleteUserById,cookieToken, id, fetchUsers)
    }
  }

  const editHandleClik = (event: React.MouseEvent<HTMLButtonElement>)=>{
    const id = String(event.currentTarget.getAttribute("user-id"));
    router.push(`http://localhost:3000/users/edit-user?editUser=${id}`)
  }

  return (
    <>
      <main className="users-main">
        <h1 className="users-h1">Usuarios</h1>

        {loading ? (
          <Spinner/>
        ) : users && users.length > 0 ? (
          <TableContaier>
            <Table>
              <Thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Email</Th>
                  <Th>Teléfono</Th>
                  <Th>Dirección</Th>
                  <Th>Tipo de documento</Th>
                  <Th>Documento</Th>
                  <Th>Acción</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user: IUsers) => (
                  <Tr key={user.id}>
                    <Td>{user.fullname}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.phone_number}</Td>
                    <Td>{user.address}</Td>
                    <Td>{user.document_type_id}</Td>
                    <Td>{user.doc_number}</Td>
                    <Td>
                      <button user-id={user.id} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2" onClick={editHandleClik}>Editar</button>
                      <button user-id={user.id} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={deleteUser}>Eliminar</button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContaier>
        ) : (
          <p>No hay usuarios disponibles</p>
        )}
      </main>
    </>
  );
};

export default User;