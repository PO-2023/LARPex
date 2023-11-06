import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Events from "./views/Events.tsx";
import Header from "./components/Header.tsx";
import DialogProvider from "./providers/DialogProvider.tsx";
import Play from "./views/Play.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <DialogProvider />
      </>
    ),
    children: [
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/play",
        
        children: [
          {path: ":id", element: <Play />}
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
