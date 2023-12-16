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
        // mocked
        // return new Promise((resolve, reject) => {
        //     const equipmentData = {
        //         currentCapacity: 10,
        //         maxCapacity: 12,
        //         playerId: 1,
        //         items: [
        //             {
        //                 id: 1,
        //                 name: "Sword",
        //                 pictureUrl: "https://icon-library.com/images/sword-png-icon/sword-png-icon-4.jpg",
        //                 quantity: 1,
        //                 weight: 2,
        //             } as ItemDTO,
        //         ],
        //     } as EquipmentDTO;
        //
        //     resolve(equipmentData);
        // });
        //
        return fetch(`http://localhost:8080/equipment/${playerId}`)
            .then(response => response.json());
    }
}