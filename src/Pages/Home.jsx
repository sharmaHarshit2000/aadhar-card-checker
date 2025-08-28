import InputForm from "../components/InputForm";
import { AiOutlineIdcard } from "react-icons/ai";

const Home = () => {
  return (
    <div className="w-full max-w-3xl p-6 sm:p-8 bg-white rounded-xl shadow-xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center mb-6 animate-fadeIn">
        
        <AiOutlineIdcard className="text-6xl sm:text-8xl text-indigo-600 mb-4" />
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-2">
          Aadhar Card Checker
        </h1>
        <p className="text-gray-600 text-center sm:text-lg">
          Verify your Aadhar number instantly and securely.
        </p>
      </div>

      {/* Input Form Card */}
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <InputForm />
      </div>
    </div>
  );
};

export default Home;
