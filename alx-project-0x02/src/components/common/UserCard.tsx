import { UserProps } from '../../interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-semibold">{name}</h2>
      <p>{email}</p>
      <p className="text-gray-600">{address.street}, {address.city}</p>
    </div>
  );
}
