import { useEffect, type PropsWithChildren } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App({ children }: PropsWithChildren) {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {children}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
