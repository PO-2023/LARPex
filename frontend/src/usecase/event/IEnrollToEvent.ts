import {EnrollEventDTO} from "@/class/dto/EnrollEventDTO";
import {IEventsPresenter} from "@/class/presenter/EventsPresenter";

export interface IEnrollToEvent {
    enrollToEvent(playedId: number, eventId: number): EnrollEventDTO
}

export class EnrollToEvent implements IEnrollToEvent {
    constructor(private presenter: IEventsPresenter) {
    }

    enrollToEvent(playedId: number, eventId: number): EnrollEventDTO {
        const result = {
            paymentId: 4,
            price: 20,
        };

        this.presenter.dispatchPayment(result)

        return result
    }
}
