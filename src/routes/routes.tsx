import React, { Fragment, lazy } from "react";
import withCheckRole from "../HOCs/withCheckRole";
import { PERMISSION_ENUM } from "../consts/common";
import BaseRoute from "@/consts/baseRoute";

// Bash importHere
const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Login = lazy(() => import("../pages/Login"));
const Homepage = lazy(() => import("../pages/Homepage"));
const Components = lazy(() => import("../pages/Components"));

interface Route {
  name: string;
  path: string;
  isPrivateRoute?: boolean;
  layout: React.LazyExoticComponent<React.MemoExoticComponent<any>> | React.ExoticComponent<any> | typeof React.Component;
  routeChild: {
    name: string;
    path: string;
    component: typeof React.Component | React.FC;
    isPrivateRoute?: boolean;
  }[];
}

const routes: Route[] = [
  {
    name: "Login Layout",
    path: BaseRoute.Login,
    layout: Fragment,
    routeChild: [
      {
        name: "Login",
        path: BaseRoute.Login,
        component: Login,
      },
    ],
  },

  {
    name: "Home Layout",
    path: BaseRoute.Homepage,
    layout: DefaultLayout,
    isPrivateRoute: true,
    routeChild: [
      // Bash appendHere
      {
        name: "Homepage",
        path: BaseRoute.Homepage,
        component: withCheckRole(Homepage, [PERMISSION_ENUM.PUBLIC]),
      },
      {
        name: "Components",
        path: BaseRoute.Components,
        component: withCheckRole(Components, [PERMISSION_ENUM.PUBLIC]),
      },
    ],
  },
];

export default routes;
