import {ItemDTO} from "@/class/dto/ItemDTO.tsx";

export type EquipmentDTO = {
    currentCapacity: number;
    size: number;
    playerId: number;
    items: ItemDTO[];
};
