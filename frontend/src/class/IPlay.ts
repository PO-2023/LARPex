import {events} from "@/mock/eventList";
import {EventDTO} from "./dto/EventDTO";

export interface IJoinPlay {
  checkForAvailablePlay(id: number): EventDTO | undefined;
}

export class PlayClient implements IJoinPlay {
  checkForAvailablePlay(id: number): EventDTO | undefined {
    return events.find((p) => p.id === id);
  }
}
