import { DateRange } from "react-day-picker";
import { IEventsPresenter } from "@/class/presenter/EventsPresenter";
import axios from "axios";

export interface IDisplayEventList {
  getEvents(dateRange: DateRange | undefined): any;
}

export class DisplayEventList implements IDisplayEventList {
  constructor(private presenter: IEventsPresenter) {}

  async getEvents(dateRange: DateRange | undefined) {
    this.presenter.startLoading();
    try {
      let dateQuery = "";
      if (dateRange?.from) {
        dateQuery = `?dateFrom=${this.formatDateToYYYYMMDD(dateRange.from)}`;
        if (dateRange.to) {
          dateQuery += `&dateTo=${this.formatDateToYYYYMMDD(dateRange.to)}`;
        } else {
          dateQuery += `&dateTo=${this.formatDateToYYYYMMDD(dateRange.from)}`;
        }
      }
      const { data: events } = await axios.get(
        `http://localhost:8080/event${dateQuery}`
      );
      this.presenter.setEvents(events);
    } catch (e) {
      this.presenter.setEvents([]);
    }
    this.presenter.stopLoading();
  }

  formatDateToYYYYMMDD(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
}
