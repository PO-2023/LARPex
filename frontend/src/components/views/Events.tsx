import Header from "../Header";
import EnrollToEventButton from "../events/EnrollToEventButton";
import EventList from "../events/EventList";

const Events = () => {
  const events = [
    {
      id: 12,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "super wydarzenie",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },
    {
      id: 13,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "super wydarzenie",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },

    {
      id: 15,
      dateTime: new Date(2012, 10, 22, 22, 0, 1),
      endTime: new Date(2012, 10, 22, 26, 0, 1),
      gameName: "gra",
      eventName: "super wydarzenie",
      maxPlayers: 12,
      players: 2,
      price: 13,
    },
    {
      id: 12,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "super wydarzenie",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },
    {
      id: 13,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "super wydarzenie",

      maxPlayers: 12,
      players: 12,
      price: 13,
    },

    {
      id: 15,
      dateTime: new Date(2012, 10, 22, 22, 0, 1),
      endTime: new Date(2012, 10, 22, 26, 0, 1),
      gameName: "gra",
      eventName: "super wydarzenie",
      maxPlayers: 12,
      players: 2,
      price: 13,
    },
    {
      id: 12,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "super wydarzenie",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },
    {
      id: 13,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "super wydarzenie",

      maxPlayers: 12,
      players: 12,
      price: 13,
    },

    {
      id: 15,
      dateTime: new Date(2012, 10, 22, 22, 0, 1),
      endTime: new Date(2012, 10, 22, 26, 0, 1),
      gameName: "gra",
      eventName: "super wydarzenie",
      maxPlayers: 12,
      players: 2,
      price: 13,
    },
    {
      id: 12,
      dateTime: new Date(),
      endTime: new Date(),
      gameName: "gra",
      eventName: "super wydarzenie",
      maxPlayers: 12,
      players: 12,
      price: 13,
    },
  ];

  return (
    <div>
      <Header />
      <main className="flex items-center">
        <EventList events={events} />
        <section className="px-20">
          <EnrollToEventButton />
        </section>
      </main>
    </div>
  );
};

export default Events;
