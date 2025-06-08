import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {users.map(u => <UserCard key={u.id} {...u} />)}
      </div>
    </>
  );
}
