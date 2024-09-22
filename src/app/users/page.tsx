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
import { getUsers } from 'app/services/users';
import { IUsers } from 'app/types/IUsers';
import TableContaier from 'app/components/UI/Table/TableContainer';
import Spinner from 'app/components/Spinner/Spinner';

const UsersPage = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [loading, setLoading] = useState(true); 

  const cookieToken = Cookies.get("token");

  useEffect(() => {
    const fetchUsers = async () => {
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

    fetchUsers();
  }, []);

  return (
    <>
      <Header>
        <li><Link href="/parkings">Inicio</Link></li>
        <li><Link href="/users">Usuarios</Link></li>
        <li><Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
      </Header>

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
                      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600  mr-2">Editar</button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Eliminar</button>
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

export default UsersPage;