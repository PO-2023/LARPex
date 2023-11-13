import { DateRange } from "react-day-picker";
import { events } from "@/mock/eventList";

export class CEvents {
  async enrollToEvents(playerId: number, eventId: number) {}

  async getEvents(dateRange: DateRange | undefined) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return events;
  }
}
