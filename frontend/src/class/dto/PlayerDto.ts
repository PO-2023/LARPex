import { CharacterDto } from './CharacterDTO';

export type PlayerDto = {
    id: number;
    name: string;
    surname: string;
    nickname: string;
    character: CharacterDto | null;
    rank: number;
}