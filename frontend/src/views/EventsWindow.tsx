import {useEffect, useState} from "react";
import EnrollToEventButton from "../components/events/EnrollToEventButton";
import EventDescriptionButton from "../components/events/EventDescriptionButton";
import EventList from "../components/events/EventList";
import {useSelectedEvent} from "@/stores/selectedItemStore/selectedItemStore";
import DatePicker from "@/components/events/DatePicker";
import {useDateRange} from "@/stores/dateRangeStore/store";
import {DisplayEventList, IDisplayEventList,} from "@/usecase/event/IDisplayEventList";
import {EventsController} from "@/class/controller/EventsController";
import {EnrollToEvent, IEnrollToEvent} from "@/usecase/event/IEnrollToEvent";
import {EventsPresenter, IEventsPresenter} from "@/class/presenter/EventsPresenter";
import {useDialog} from "@/stores/dialogStore/dialogStore";
import {Loader2} from "lucide-react";
import {EventDTO} from "@/class/dto/EventDTO";

const EventsWindow = () => {
  const {dialogDispatcher} = useDialog();

  const [events, setEvents] = useState<EventDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const presenter: IEventsPresenter = new EventsPresenter(
      dialogDispatcher,
      setEvents,
      setIsLoading
  );
  const enrollToEvent: IEnrollToEvent = new EnrollToEvent(presenter);
  const displayEventList: IDisplayEventList = new DisplayEventList(presenter);
  const controller = new EventsController(displayEventList, enrollToEvent);

  const { setSelectedEvent, selectedEvent } = useSelectedEvent();
  const { dateRange } = useDateRange();

  useEffect(() => {
    if (events?.length) setSelectedEvent(events[0]);
  }, [setSelectedEvent, events]);

  useEffect(() => {
    controller.getEvents(dateRange);
  }, [dateRange]);

  return (
    <div className="sm:px-14 px-3 mt-10">
      <h1 className="font-bold text-2xl">Lista wydarzeń 🎉</h1>
      <main className="flex flex-col mt-5">
        <div className="flex justify-between items-center">
          <section className="flex gap-4">
            {selectedEvent && (
              <EnrollToEventButton
                onClick={() =>
                  controller.enroll({
                    playerId: 123,
                    eventId: selectedEvent?.id,
                  })
                }
              />
            )}
            {selectedEvent && (
              <EventDescriptionButton
                onClick={() => presenter.dispatchDescription()}
              />
            )}
          </section>
          <DatePicker />
        </div>

        {isLoading && (
          <Loader2 className="transition-all animate-spin self-center mt-32" />
        )}
        {(!isLoading || !events) && <EventList events={events} />}
      </main>
    </div>
  );
};

export default EventsWindow;
