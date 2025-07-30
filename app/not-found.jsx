import Link from "next/link";
import { FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center animate-fadeIn scale-95 hover:scale-100 transition-transform duration-500">
        <div className="flex justify-center mb-6">
          <FiAlertTriangle className="text-orange-500 text-6xl animate-pulse" />
        </div>
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 transition-opacity duration-700">
          404
        </h1>
        <p className="text-2xl text-gray-600 font-medium mb-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
