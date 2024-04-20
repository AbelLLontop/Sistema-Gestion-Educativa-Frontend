import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import RegistroEvaluacionesPage from "../pages/RegistroEvaluacionesPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <RegistroEvaluacionesPage /> },
      { path: "/about", element: <div>About</div> },
      { path: "/contact", element: <div>Contact</div> },
    ],
  },
]);

export default routes;
