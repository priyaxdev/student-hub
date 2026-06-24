import { useNavigate } from "react-router";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg">
      <p className="text-8xl font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl font-bold text-text-primary mb-2">Oops! Page not found.</h1>
      <p className="text-sm text-text-secondary mb-8">The page you are looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-medium"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Notfound;