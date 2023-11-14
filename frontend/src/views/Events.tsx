import {useEffect} from "react";
import EnrollToEventButton from "../components/events/EnrollToEventButton";
import EventDescriptionButton from "../components/events/EventDescriptionButton";
import EventList from "../components/events/EventList";
import {useSelectedEvent} from "@/stores/selectedItemStore/selectedItemStore";
import DatePicker from "@/components/events/DatePicker";
import {useDateRange} from "@/stores/dateRangeStore/store";
import {DisplayEventList, IDisplayEventList} from "@/usecase/event/IDisplayEventList";
import {EventsController} from "@/class/controller/EventsController";
import {EnrollToEvent, IEnrollToEvent} from "@/usecase/event/IEnrollToEvent";
import {EventsPresenter} from "@/class/presenter/EventsPresenter";
import {useDialog} from "@/stores/dialogStore/dialogStore";

const displayEventList: IDisplayEventList = new DisplayEventList()


const Events = () => {
    return EventsWindow()
};

const EventsWindow = () => {
    const {dialogDispatcher} = useDialog();

    const presenter = new EventsPresenter(dialogDispatcher)
    const enrollToEvent: IEnrollToEvent = new EnrollToEvent(dialogDispatcher)
    const controller = new EventsController(displayEventList, enrollToEvent)

    const {setSelectedEvent, selectedEvent} = useSelectedEvent();
    const {dateRange} = useDateRange();
    const events = controller.getEvents(dateRange);

    useEffect(() => {
        if (events?.length) setSelectedEvent(events[0]);
    }, [setSelectedEvent, events]);
    return (
        <div className="sm:px-14 px-3 mt-10">
            <h1 className="font-bold text-2xl">Lista wydarzeń 🎉</h1>
            <main className="flex flex-col mt-5">
                <div className="flex justify-between items-center">
                    <section className="flex gap-4">
                        {selectedEvent && <EnrollToEventButton onClick={() => controller.enroll({
                            playerId: 123,
                            eventId: selectedEvent?.id,
                        })}/>}
                        {selectedEvent && <EventDescriptionButton onClick={() => presenter.dispatchDescription()}/>}
                    </section>
                    <DatePicker/>
                </div>

                <EventList events={events}/>
            </main>
        </div>
    );
}

export default Events;
