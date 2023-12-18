import {IPlayerScreens} from "@/dispatcher/IPlayerScreens.tsx";
import {EquipmentDTO} from "@/class/dto/EquipmentDTO.tsx";
import {ItemDTO} from "@/class/dto/ItemDTO.tsx";

export interface IDisplayEquipment {
    displayEquipment(playerId: number): void;
}

export class EquipmentManager implements IDisplayEquipment {
    private readonly equipmentDispatcher: IPlayerScreens;

    constructor(equipmentDispatcher: IPlayerScreens) {
        this.equipmentDispatcher = equipmentDispatcher;
    }

    displayEquipment(playerId?: number): void {
        this.fetchEquipment(playerId)
            .then(eq => this.equipmentDispatcher.showPlayerEquipment(eq));
    }

    private fetchEquipment(playerId?: number): Promise<EquipmentDTO> {
        return fetch(`http://localhost:8080/equipment/${playerId}`)
            .then(response => response.json());
    }
}