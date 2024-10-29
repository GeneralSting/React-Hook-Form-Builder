import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import { AppRoute } from "../types/appRoute";
import {
  HOME_PATH,
  LOGIN_PATH,
  PAGE_NOT_FOUND_PATH,
  REGISTRATION_PATH,
} from "../data/routes";
import { Registration } from "../pages";
import Home from "../pages/Home";

const appRoutes: AppRoute[] = [
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    path: REGISTRATION_PATH,
    element: <Registration />,
  },
  {
    path: HOME_PATH,
    element: <Home />,
  },
  {
    path: PAGE_NOT_FOUND_PATH,
    element: <PageNotFound />,
  },
];

export default appRoutes;
