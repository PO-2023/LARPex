import { EventDTO } from "@/class/dto/EventDTO";

export class EventApiClient {
    async getEvent(eventId: number): Promise<EventDTO | null> {
        const apiUrl = 'http://localhost:8080/event'; // Ścieżka do kontrolera

        try {
            const response = await fetch(`${apiUrl}/${eventId}`);

            if (response.ok) {
                return await response.json() as EventDTO
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
}