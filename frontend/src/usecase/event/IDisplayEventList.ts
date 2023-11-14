import {events} from "@/mock/eventList";
import {DateRange} from "react-day-picker";
import {EventsPresenter} from "@/class/presenter/EventsPresenter";

export interface IDisplayEventList {
    getEvents(dateRange: DateRange | undefined)
}

export class DisplayEventList implements IDisplayEventList {
    constructor(private presenter: EventsPresenter) {
    }

    async getEvents() {
        this.presenter.startLoading()
        await new Promise((resolve) => setTimeout(resolve, 1000))
        this.presenter.setEvents(events)
    }
}
