import {EventDTO} from "@/class/dto/EventDTO";
import {events} from "@/mock/eventList";
import {DateRange} from "react-day-picker";

export interface IDisplayEventList {
    getEvents(dateRange: DateRange | undefined): EventDTO[]
}

export class DisplayEventList implements IDisplayEventList {
    getEvents(): EventDTO[] {
        return events
    }
}
