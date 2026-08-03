// src/pages/ErrorPage.tsx
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let errorMessage = "Something went wrong";
  let errorStatusText = "Not Found";

  if (isRouteErrorResponse(error)) {
    errorStatusText = error.statusText;
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="page-wrapper flex px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-4 sm:py-6 lg:py-8">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-700">
            Error: {errorStatusText}
          </h2>
          <p className="text-gray-500 pt-4 text-md md:text-xl">
            "{errorMessage}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
