import {EventDTO} from "@/class/dto/EventDTO";
import {events} from "@/mock/eventList";

export interface IDisplayEventList {
    getEvents(): EventDTO[]
}

export class DisplayEventList implements IDisplayEventList {
    getEvents(): EventDTO[] {
        return events
    }
}
