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
import StaticPage from "../../shared/pages/StaticPage";

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

      { path: "/about", element: <StaticPage /> },
      { path: "/features", element: <StaticPage /> },
      { path: "/works", element: <StaticPage /> },
      { path: "/career", element: <StaticPage /> },
      { path: "/support", element: <StaticPage /> },
      { path: "/delivery", element: <StaticPage /> },
      { path: "/terms", element: <StaticPage /> },
      { path: "/privacy", element: <StaticPage /> },
      { path: "/faq", element: <StaticPage /> },
      { path: "/manage-deliveries", element: <StaticPage /> },
      { path: "/orders", element: <StaticPage /> },
      { path: "/payments", element: <StaticPage /> },
      { path: "/ebooks", element: <StaticPage /> },
      { path: "/dev-tutorial", element: <StaticPage /> },
      { path: "/blog", element: <StaticPage /> },
      { path: "/youtube", element: <StaticPage /> },
    ],
  },
]);

export default function RouterProvider() {
  return <RouterProviderRouter router={router} />;
}
