import {ItemDTO} from "@/class/dto/ItemDTO.tsx";

export type EquipmentDTO = {
    currentCapacity: number;
    maxCapacity: number;
    playerId: number;
    items: ItemDTO[];
};
