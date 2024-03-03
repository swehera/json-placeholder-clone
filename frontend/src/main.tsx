import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users.tsx";
import ProductTypes from "./pages/ProductTypes.tsx";
import Header from "./components/Header.tsx";
import Photos from "./pages/Photos.tsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product",
        element: <ProductTypes />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/photos",
        element: <Photos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
