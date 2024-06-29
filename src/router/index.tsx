import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import RegistroEvaluacionesPage from "../pages/RegistroEvaluacionesPage";
import EvaluacionesCursosPage from "../pages/EvaluacionesCursosPage";
import PeriodosPage from "../pages/PeriodosPage";
import AreasPage from "../pages/AreasPage";
import CompetenciasPage from "../pages/CompetenciasPage";
import NivelesPage from "../pages/NivelesPage";
import LoginPage from "../pages/Login";

type RouteProps = {
  children: JSX.Element;
};

const PublicRoute = ({ children }: RouteProps) => {
  const token = localStorage.getItem("token");
  console.log("PUBLIC",token);
  return token ? <Navigate to="/" replace /> : children;
};

const PrivateRoute = ({ children }: RouteProps) => {
  const token = localStorage.getItem("token");
  console.log("PRIVATE",token);
  return token ? children : <Navigate to="/login" replace />;
};


const routes = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Layout /></PrivateRoute>,
    children: [
      { path: "/", element: <Navigate to="/registro-evaluaciones" replace /> },
      { path: "/registro-evaluaciones", element:  <RegistroEvaluacionesPage /> },
      { path: "/registro-evaluaciones/evaluacion-cursos", element: <EvaluacionesCursosPage/> },
      {path: "/config", element: <>Hello World</>},
      {path: "/config/periodos", element: <PeriodosPage/>},
      {path: "/config/areas", element: <AreasPage/>},
      {path: "/config/competencias", element: <CompetenciasPage/>},
      {path: "/config/niveles", element: <NivelesPage/>},
      { path: "*", element: <Navigate to="/registro-evaluaciones" replace />}
    ],
  },
  {
    path:"/login",
    element: <PublicRoute><LoginPage /></PublicRoute>,
  }
]);

export default routes;
