import { DateRange } from "react-day-picker";
import { events } from "@/mock/eventList";
import { EnrollEventDTO } from "./EnrollEvent";
export class CEvents {
  async enrollToEvents(playerId: number, eventId: number) {
    //axios.post()...
    const response: EnrollEventDTO = { paymentId: 123, price: 23 };

    return response;
  }

  async getEvents(dateRange: DateRange | undefined) {
    //axios.get()...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return events;
  }
}
