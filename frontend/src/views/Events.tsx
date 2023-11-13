import { useEffect } from "react";
import EnrollToEventButton from "../components/events/EnrollToEventButton";
import EventDescriptionButton from "../components/events/EventDescriptionButton";
import EventList from "../components/events/EventList";
import { useSelectedEvent } from "@/stores/selectedItemStore/selectedItemStore";
import DatePicker from "@/components/events/DatePicker";
import { useGetEvents } from "@/hooks/useGetEvents";
import { Loader2 } from "lucide-react";
import { useDateRange } from "@/stores/dateRangeStore/store";
const Events = () => {
  const { setSelectedEvent, selectedEvent } = useSelectedEvent();
  const { dateRange } = useDateRange();

  const { events, isLoading } = useGetEvents(dateRange);

  useEffect(() => {
    if (events?.length) setSelectedEvent(events[0]);
  }, [setSelectedEvent, isLoading, events]);

  return (
    <div className="sm:px-14 px-3 mt-10">
      <h1 className="font-bold text-2xl">Lista wydarzeń 🎉</h1>
      <main className="flex flex-col mt-5">
        <div className="flex justify-between items-center">
          <section className="flex gap-4">
            {selectedEvent && <EnrollToEventButton />}
            {selectedEvent && <EventDescriptionButton />}
          </section>
          <DatePicker />
        </div>
        {isLoading && (
          <Loader2 className="transition-all animate-spin self-center mt-32" />
        )}

        {!isLoading && <EventList events={events} />}
      </main>
    </div>
  );
};

export default Events;
