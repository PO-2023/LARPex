import { EventDTO } from "./EventData";

export interface CEvents {
  onDiplayEventList: () => EventDTO[];
  enrollToEvent: (playerId: number, eventId: number) => boolean;
}
