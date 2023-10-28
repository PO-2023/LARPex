import { EventData } from "@/class/EventData";
import { FC } from "react";
import { TableCell, TableRow } from "../ui/table";
import { useSelectedEvent } from "@/stores/selectedItemStore/selectedItemStore";
import { cn } from "@/lib/utils";
import { formatTime } from "@/lib/utils";

interface EventProps {
  event: EventData;
}

const Event: FC<EventProps> = ({ event }) => {
  const { selectedEventId, setSelectedEventId } = useSelectedEvent();
  const formattedDateTime = event.dateTime.toLocaleDateString();

  const startTime =
    formatTime(event.dateTime.getHours()) +
    ":" +
    formatTime(event.dateTime.getMinutes());
  const endTime =
    formatTime(event.endTime.getHours()) +
    ":" +
    formatTime(event.endTime.getMinutes());

  return (
    <TableRow
      onClick={() => setSelectedEventId(event.id)}
      key={event.id}
      className={cn(
        "cursor-pointer",
        selectedEventId === event.id && "bg-gray-100 hover:bg-gray-100"
      )}
    >
      <TableCell
        className={cn(
          "pl-2",
          selectedEventId === event.id && "font-bold text-indigo-400"
        )}
      >
        {event.eventName}
      </TableCell>
      <TableCell>{event.gameName}</TableCell>
      <TableCell>{formattedDateTime}</TableCell>
      <TableCell>{`${startTime}-${endTime}`}</TableCell>
      <TableCell>{`${event.players}/${event.maxPlayers}`}</TableCell>
    </TableRow>
  );
};

export default Event;
