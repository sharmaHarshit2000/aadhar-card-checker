import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
      >
        <AiOutlineHome className="text-xl" />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
