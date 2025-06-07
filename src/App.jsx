import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayOut from "./LayOut/MainLayOut";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      errorElement: <div>Page Not Found</div>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={route} />
  );
};

export default App;
