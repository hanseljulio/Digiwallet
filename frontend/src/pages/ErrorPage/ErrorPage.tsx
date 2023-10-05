import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/login");
  }, 3000);

  return (
    <div className="h-screen w-screen bg-red-500">
      <h1 className="text-center py-[350px]">
        You are not allowed to access this page.
        <br />
        <span>Or the page is not found.</span>
        <br />
      </h1>
    </div>
  );
}

export default ErrorPage;
