import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-2">Page not found.</p>
      <p className="text-xl mb-2">Page not working.</p>
      <p className="text-xl mb-8">Neither am I.</p>
      <Link
        href="/"
        className="text-accent underline hover:no-underline text-lg"
      >
        Return to Index
      </Link>
    </div>
  );
}
