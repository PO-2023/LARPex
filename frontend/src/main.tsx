import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EventsWindow from "./views/EventsWindow.tsx";
import Header from "./components/Header.tsx";
import DialogProvider from "./providers/DialogProvider.tsx";
import PlayerPanelWindow from "./views/PlayerPanelWindow.tsx";
import {QueryProvider} from "./providers/QueryProvider.tsx";

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
        element: <EventsWindow/>,
      },
      {
        path: "/play",

        children: [{ path: ":id", element: <PlayerPanelWindow /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>
);
