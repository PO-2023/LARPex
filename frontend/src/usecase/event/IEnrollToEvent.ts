import {IEventsPresenter} from "@/class/presenter/EventsPresenter";
import axios from "axios";

export interface IEnrollToEvent {
    enrollToEvent(playerId: number, eventId: number)
}

export class EnrollToEvent implements IEnrollToEvent {
    constructor(private presenter: IEventsPresenter) {
    }

    async enrollToEvent(playerId: number, eventId: number) {
        const {data} = await axios.post(`http://localhost:8080/event/${eventId}/${playerId}`);
        console.log(data)

        this.presenter.dispatchPayment(data)
    }
}
