import { PlayerDTO } from "./PlayerData";
import { players } from "@/mock/PlayerMock";


export interface IDisplayPlayerPanel {
    getPlayerData(id: number): PlayerDTO | undefined;
}

export class PlayerClient implements IDisplayPlayerPanel {
    getPlayerData(id: number): PlayerDTO | undefined {
        return players.find(p => p.id === id);
    };
}