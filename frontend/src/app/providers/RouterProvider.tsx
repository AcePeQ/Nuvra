import {
  createBrowserRouter,
  RouterProvider as RouterProviderRouter,
} from "react-router-dom";

import RootLayout from "../../shared/ui/layout/RootLayout";
import Homepage from "../../features/home/pages/Homepage";
import Product from "../../features/product/pages/Product";
import Cart from "../../features/cart/pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop/:category/:productCategory/:productName",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default function RouterProvider() {
  return <RouterProviderRouter router={router} />;
}
