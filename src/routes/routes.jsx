import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { SobreNosotros } from "../components/SobreNosotros";
import { GeneralLayout } from "./layout/GeneralLayout";

export const routes = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <GeneralLayout />,
        children: [
          { index: true, element: <App /> },
          {
            path: "/nosotros",
            element: <SobreNosotros />,
          },
        ],
      },
    ],
    {
      future: {
        v7_startTransition: true,
      },
    }
  );
  return router;
};

export default routes();
