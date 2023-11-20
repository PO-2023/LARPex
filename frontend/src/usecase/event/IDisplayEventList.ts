import {DateRange} from "react-day-picker";
import {IEventsPresenter} from "@/class/presenter/EventsPresenter";
import axios from "axios";

export interface IDisplayEventList {
  getEvents(dateRange: DateRange | undefined): any;
}

export class DisplayEventList implements IDisplayEventList {
  constructor(private presenter: IEventsPresenter) {
  }

  async getEvents() {
    this.presenter.startLoading();
    try {
      const { data } = await axios.get("http://localhost:8080/event");
      console.log(data);
      this.presenter.setEvents(data);
    } catch (e) {}
  }
}
