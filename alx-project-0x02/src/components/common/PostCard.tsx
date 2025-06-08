import { PostProps } from '../../interfaces';

export default function PostCard({ title, body, userId }: PostProps) {
  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-semibold">{title}</h2>
      <p>{body}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
}
