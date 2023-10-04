function ErrorPage() {
  return (
    <div className="h-screen w-screen bg-red-500">
      <h1 className="text-center py-[350px]">
        You are not allowed to access this page.
        <br />
        <span>Get out of here.</span>
      </h1>
    </div>
  );
}

export default ErrorPage;
