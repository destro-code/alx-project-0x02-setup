import Link from 'next/link';

export default function Header() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link href="/">Root</Link>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
}
