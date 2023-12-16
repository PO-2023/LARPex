import {IPlayerScreens} from "@/dispatcher/IPlayerScreens.tsx";
import {EquipmentDTO} from "@/class/dto/EquipmentDTO.tsx";
import EquipmentView from "@/components/equipment/EquipmentView.tsx";

import {useQuery} from "@tanstack/react-query";
import {render} from "react-dom";
import {createRoot} from "react-dom/client";

export class EquipmentDispatcher implements IPlayerScreens {

    private equipmentView: EquipmentView;


    constructor() {
    }

    showPlayerEquipment(eq: EquipmentDTO): void {
        this.equipmentView = new EquipmentView(eq);

        const playerPanel = document.getElementById("player-panel");
        createRoot(playerPanel).render(<EquipmentView equipment={eq}/>);
    }
}