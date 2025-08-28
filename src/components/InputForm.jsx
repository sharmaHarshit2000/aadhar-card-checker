import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "./Loader";

const InputForm = () => {
  const [aadhar, setAadhar] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // Only allow digits, max 12
    let value = e.target.value.replace(/\D/g, "").slice(0, 12);
    // Auto-format 1234-5678-9123
    value = value.replace(/(\d{4})(?=\d)/g, "$1-");
    setAadhar(value);
  };

  const handleCheck = async () => {
    const rawAadhar = aadhar.replace(/-/g, "");

    // UIDAI Rule: must be 12 digits, first digit 2–9
    const regex = /^[2-9]{1}[0-9]{11}$/;
    if (!regex.test(rawAadhar)) {
      toast.error("Invalid Aadhar (must be 12 digits & start with 2-9)");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) throw new Error("Network error");
      await response.json();

      // Simulate random failure 
      if (Math.random() > 0.5) {
        toast.success("Aadhar Verified Successfully");
        navigate("/result", { state: { aadhar: rawAadhar } });
      } else {
        toast.error("Invalid Aadhar number");
      }
    } catch (err) {
      toast.error("Failed to check Aadhar. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter Aadhar number"
        aria-label="Aadhar Number Input" 
        value={aadhar}
        onChange={handleChange}
        disabled={loading}
        className="p-4 text-lg border border-gray-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                   focus:ring-offset-2 transition-all duration-300"
      />
      <button
        onClick={handleCheck}
        disabled={loading || aadhar.length === 0}
        className="bg-indigo-600 text-white p-4 rounded-lg text-lg 
                   hover:bg-indigo-700 disabled:opacity-50 
                   transition-all duration-300 flex justify-center items-center"
      >
        {loading ? <Loader /> : "Check"}
      </button>
    </div>
  );
};

export default InputForm;
