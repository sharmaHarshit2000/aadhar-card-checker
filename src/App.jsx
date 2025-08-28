import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import NotFoundPage from "./pages/NotFoundPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          success: { className: "toast-success", duration: 3000 },
          error: { className: "toast-error", duration: 3000 },
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 p-4">
              <Home />
            </div>
          }
        />
        <Route
          path="/result"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 p-4">
              <Result />
            </div>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
