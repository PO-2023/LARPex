import { EventDTO } from "@/class/dto/EventDTO";
import {PlayerWithActiveEventDto} from "@/class/dto/PlayerWithActiveEventDto";

export class EventApiClient {
    async getActiveEvent(userId: number): Promise<PlayerWithActiveEventDto | null> {
        const apiUrl = 'http://localhost:8080/players'; // Ścieżka do kontrolera

        try {
            const response = await fetch(`${apiUrl}/${userId}/activeEvent`);

            if (response.ok) {
                return await response.json() as PlayerWithActiveEventDto
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
}