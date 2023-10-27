import EnrollToEventButton from "../events/EnrollToEventButton";
import EventDescriptionButton from "../events/EventDescriptionButton";
import EventList from "../events/EventList";

const Events = () => {
  const events = [
    {
      id: 12,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "Wydarzenie 1",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },
    {
      id: 13,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "Wydarzenie 2",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },

    {
      id: 15,
      dateTime: new Date(2012, 10, 22, 22, 0, 1),
      endTime: new Date(2012, 10, 22, 26, 0, 1),
      gameName: "gra",
      eventName: "Wydarzenie 3",
      maxPlayers: 12,
      players: 2,
      price: 13,
    },
    {
      id: 12,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "Wydarzenie 4",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },
    {
      id: 13,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "Wydarzenie 5",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },

    {
      id: 15,
      dateTime: new Date(2012, 10, 22, 22, 0, 1),
      endTime: new Date(2012, 10, 22, 26, 0, 1),
      gameName: "gra",
      eventName: "Wydarzenie 6",
      maxPlayers: 12,
      players: 2,
      price: 13,
    },
    {
      id: 12,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "Wydarzenie 7",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },
  ];

  return (
    <div className="sm:px-14 px-3 mt-10">
      <h1 className="font-bold text-2xl">Lista wydarzeń 🎉</h1>
      <main className="flex flex-col mt-5">
        <section className="flex gap-4">
          <EnrollToEventButton />
          <EventDescriptionButton />
        </section>

        <EventList events={events} />
      </main>
    </div>
  );
};

export default Events;
