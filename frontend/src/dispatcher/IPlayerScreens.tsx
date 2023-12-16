import {EquipmentDTO} from "@/class/dto/EquipmentDTO.tsx";

export interface IPlayerScreens {
    showPlayerEquipment(eq: EquipmentDTO): void;
}