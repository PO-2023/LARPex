import { CharacterDto } from './CharacterDTO';
import {EventDTO} from "@/class/dto/EventDTO";

export type PlayerWithActiveEventDto = {
    id: number;
    name: string;
    surname: string;
    nickname: string;
    character: CharacterDto | null;
    rank: number;
    activeEvent: EventDTO | null;
}