import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EventsWindow from "./views/EventsWindow.tsx";
import Header from "./components/Header.tsx";
import DialogProvider from "./providers/DialogProvider.tsx";
import PlayerPanelWindow from "./views/PlayerPanelWindow.tsx";
import {QueryProvider} from "./providers/QueryProvider.tsx";
import EquipmentView from "@/components/equipment/EquipmentView.tsx";
import {EquipmentDTO} from "@/class/dto/EquipmentDTO.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header/>
                <DialogProvider/>
            </>
        ),
        children: [
            {
                path: "/events",
                element: <EventsWindow/>,
            },
            {
                path: "/play",

                children: [{path: ":id", element: <PlayerPanelWindow/>}],
            },
            {
                path: "/equipment",
                element: <EquipmentView/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryProvider>
        <RouterProvider router={router}/>
    </QueryProvider>
);
