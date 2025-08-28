import { useLocation, Link } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const aadhar = location.state?.aadhar || "";
  const masked = aadhar.replace(/\d(?=\d{4})/g, "*");

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl p-8 bg-white rounded-xl shadow-xl mx-auto text-center animate-fadeIn">
      {aadhar ? (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
            Aadhar Result
          </h2>
          <p className="text-green-600 text-xl sm:text-2xl font-semibold mb-6">
            {masked}
          </p>
          <Link
            to="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 text-lg sm:text-xl transition-all duration-300"
          >
            Check Another
          </Link>
        </>
      ) : (
        <p className="text-red-500 text-lg">No Aadhar data found</p>
      )}
    </div>
  );
};

export default Result;
