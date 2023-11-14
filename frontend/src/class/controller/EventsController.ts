import {DateRange} from "react-day-picker";
import {IDisplayEventList} from "@/usecase/event/IDisplayEventList";
import {IEnrollToEvent} from "@/usecase/event/IEnrollToEvent";

export class EventsController {

    constructor(private displayEventList: IDisplayEventList, private enrollToEvent: IEnrollToEvent) {
    }

    enroll(playerId: number, eventId: number) {
        return this.enrollToEvent.enrollToEvent(playerId, eventId);
    }

    getEvents(dateRange: DateRange | undefined) {
        return this.displayEventList.getEvents(dateRange)
    }
}
