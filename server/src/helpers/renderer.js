import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/pages/HomePage";
import { StaticRouter } from "react-router-dom";

import Routes from "../client/components/Routes";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return ` 
    <html>
      <head>
      </head>
      <body>
      <div id="root">${content}</div>
      <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
      <script src="bundle.js"></script>
      </body>
    </html>
    `;
};
