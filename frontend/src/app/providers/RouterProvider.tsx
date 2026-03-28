import {
  createBrowserRouter,
  RouterProvider as RouterProviderRouter,
} from "react-router-dom";

import RootLayout from "../../shared/ui/layout/RootLayout";
import Homepage from "../../features/home/pages/Homepage";
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
        path: "shop",
        async lazy() {
          const { Shop } = await import("../../features/shop/pages/Shop")
          return { Component: Shop }
        }
      },
      {
        path: "shop/:category/:productCategory/:productName",
        async lazy() {
          const { Product } = await import("../../features/product/pages/Product")
          return { Component: Product }
        }
      },
      {
        path: "cart",
        async lazy() {
          const { Cart } = await import("../../features/cart/pages/Cart")
          return { Component: Cart }
        }
      },
      {
        path: "account/:mode?",
        async lazy() {
          const { Account } = await import("../../features/account/pages/account/Account")
          return { Component: Account }
        }
      },
      {
        path: ":page",
        async lazy() {
          const { StaticPage } = await import("../../shared/pages/StaticPage")
          return { Component: StaticPage }
        }
      },
    ],
  },
]);

export default function RouterProvider() {
  return <RouterProviderRouter router={router} />;
}
