import { EventDTO } from "@/class/dto/EventDTO";
import { FC } from "react";
import { TableCell, TableRow } from "../ui/table";
import { useSelectedEvent } from "@/stores/selectedItemStore/selectedItemStore";
import { cn, formatTime } from "@/lib/utils";

interface EventProps {
  event: EventDTO;
}

const Event: FC<EventProps> = ({ event }) => {
  const { selectedEvent, setSelectedEvent } = useSelectedEvent();

  const startDate = new Date(event.startTime);
  const endDate = new Date(event.endTime);

  const formattedDateTime = startDate.toLocaleDateString();

  const startTime =
    formatTime(startDate.getHours()) + ":" + formatTime(startDate.getMinutes());
  const endTime =
    formatTime(endDate.getHours()) + ":" + formatTime(endDate.getMinutes());

  return (
    <TableRow
      onClick={() => setSelectedEvent(event)}
      key={event.id}
      className={cn(
        "cursor-pointer text-xs sm:text-sm",
        selectedEvent?.id === event.id && "bg-gray-100 hover:bg-gray-100"
      )}
    >
      <TableCell
        className={cn(
          "pl-2",
          selectedEvent?.id === event.id && "font-bold text-indigo-400"
        )}
      >
        {event.name}
      </TableCell>
      <TableCell>{event.game.title}</TableCell>
      <TableCell>{formattedDateTime}</TableCell>
      <TableCell>{`${startTime}-${endTime}`}</TableCell>
      <TableCell>{`${event.players}/${event.game.playerLimit}`}</TableCell>
    </TableRow>
  );
};

export default Event;
