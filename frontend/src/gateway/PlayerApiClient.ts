import { PlayerDto } from "@/class/dto/PlayerDTO";

export class PlayerApiClient {
    async getPlayer(playerId: number): Promise<PlayerDto | null> {
        const apiUrl = 'http://localhost:8080/players'; // Ścieżka do kontrolera

        try {
            const response = await fetch(`${apiUrl}/${playerId}`);

            if (response.ok) {
                return await response.json() as PlayerDto
            } else {
                console.error(`HTTP error: ${response.status}`);
                return null;
            }
        } catch (error) {
            console.error("Error fetching player data:", error);
            return null;
        }
    }
}