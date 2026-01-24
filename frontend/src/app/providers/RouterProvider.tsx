import {
  createBrowserRouter,
  RouterProvider as RouterProviderRouter,
} from "react-router-dom";

import RootLayout from "../../shared/ui/layout/RootLayout";
import Homepage from "../../features/home/pages/Homepage";
import Product from "../../features/product/pages/Product";
import Cart from "../../features/cart/pages/Cart";
import Account from "../../features/account/pages/account/Account";
import Shop from "../../features/shop/pages/Shop";
import ErrorFull from "../../shared/ui/errors/errorFull/ErrorFull";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorFull status={404} message="Page Not Found!" />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "shop/:category/:productCategory/:productName",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

export default function RouterProvider() {
  return <RouterProviderRouter router={router} />;
}
