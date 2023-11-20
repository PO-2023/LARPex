import { IEventsPresenter } from "@/class/presenter/EventsPresenter";
import axios from "axios";

export interface IEnrollToEvent {
  enrollToEvent(playerId: number, eventId: number): void;
}

export class EnrollToEvent implements IEnrollToEvent {
  constructor(private presenter: IEventsPresenter) {}

  async enrollToEvent(playerId: number, eventId: number) {
    try {
      const { data: enrollData } = await axios.post(
        `http://localhost:8080/event/${eventId}/${playerId}`
      );
      this.presenter.dispatchPayment(enrollData);
    } catch (e) {}
  }
}
