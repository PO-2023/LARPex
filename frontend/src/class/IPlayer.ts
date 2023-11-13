import { PlayerDTO } from "./PlayerData";
import { players } from "@/mock/PlayerMock";


export interface IPlayer {
    getPlayer(id: number): PlayerDTO | undefined;
}

export class PlayerClient implements IPlayer {
    getPlayer(id: number): PlayerDTO | undefined {
        return players.find(p => p.id === id);
    };
}