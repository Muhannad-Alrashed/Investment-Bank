import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="page-wrapper flex px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28 py-4 sm:py-6 lg:py-8">
      <div className="flex h-[90vh] items-center justify-center bg-cold mx-auto rounded-lg">
        <section
          className="flex max-w-md flex-col items-center text-center"
          aria-labelledby="not-found-title"
        >
          <span className="text-4xl sm:text-6xl font-bold text-primary">
            404
          </span>

          <h3 className="text-lg sm:text-3xl font-bold">Page Not Found</h3>

          <p className="p-4 md:px-12 text-sm sm:text-lg ">
            Sorry, the page you are looking for does not exist or may have been
            moved.
          </p>
          <Link
            className="hover:text-white hover:bg-black outline rounded py-2 px-4"
            to="/"
          >
            Back to homepage
          </Link>
        </section>
      </div>
    </div>
  );
}

export default NotFoundPage;
