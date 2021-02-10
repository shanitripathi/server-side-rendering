import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import App from "../App";
import UsersListPage, { loadData } from "../pages/UsersListPage";

export default [
  {
    ...App,
    routes: [
      { ...HomePage, path: "/", exact: true },

      { ...UsersListPage, path: "/users" },
    ],
  },
];
