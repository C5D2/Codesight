import { Layout } from "@components/layout/Layout";
import Home from "@pages/Home";
import Stack from "@pages/Stack/Stack";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/stack',
        element: <Stack />
      }
    ]
  }
])

export default router;