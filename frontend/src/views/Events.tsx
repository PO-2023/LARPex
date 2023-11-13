import { useEffect } from "react";
import EnrollToEventButton from "../components/events/EnrollToEventButton";
import EventDescriptionButton from "../components/events/EventDescriptionButton";
import EventList from "../components/events/EventList";
import { events } from "@/mock/eventList";
import { useSelectedEvent } from "@/stores/selectedItemStore/selectedItemStore";
import DatePicker from "@/components/events/DatePicker";
const Events = () => {
  const { setSelectedEvent } = useSelectedEvent();
  useEffect(() => {
    setSelectedEvent(events[0]);
  }, [setSelectedEvent]);

  return (
    <div className="sm:px-14 px-3 mt-10">
      <h1 className="font-bold text-2xl">Lista wydarzeń 🎉</h1>
      <main className="flex flex-col mt-5">
        <div className="flex justify-between items-center">
          <section className="flex gap-4">
            <EnrollToEventButton />
            <EventDescriptionButton />
          </section>
          <DatePicker />
        </div>

        <EventList events={events} />
      </main>
    </div>
  );
};

export default Events;
