import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import RegistroEvaluacionesPage from "../pages/RegistroEvaluacionesPage";
import EvaluacionesCursosPage from "../pages/EvaluacionesCursosPage";
import PeriodosPage from "../pages/PeriodosPage";
import AreasPage from "../pages/AreasPage";
import CompetenciasPage from "../pages/CompetenciasPage";
import NivelesPage from "../pages/NivelesPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/registro-evaluaciones" replace /> },
      { path: "/registro-evaluaciones", element:  <RegistroEvaluacionesPage /> },
      { path: "/registro-evaluaciones/evaluacion-cursos", element: <EvaluacionesCursosPage/> },
      {path: "/config", element: <>Hello World</>},
      {path: "/config/periodos", element: <PeriodosPage/>},
      {path: "/config/areas", element: <AreasPage/>},
      {path: "/config/competencias", element: <CompetenciasPage/>},
      {path: "/config/niveles", element: <NivelesPage/>},
    ],
  },
]);

export default routes;
