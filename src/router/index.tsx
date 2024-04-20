import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import RegistroEvaluacionesPage from "../pages/RegistroEvaluacionesPage";
import EvaluacionesCursosPage from "../pages/EvaluacionesCursosPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/registro-evaluaciones" replace /> },
      { path: "/registro-evaluaciones", element:  <RegistroEvaluacionesPage /> },
      { path: "/registro-evaluaciones/evaluacion-cursos", element: <EvaluacionesCursosPage/> },
    ],
  },
]);

export default routes;
