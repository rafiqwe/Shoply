import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayOut from "./LayOut/MainLayOut";
import ProductDetails from "./pages/ProductDetails";
import Product from "./pages/Product";
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
        {
          path: "/products",
          element: <Product/>,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default App;
