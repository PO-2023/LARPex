import {EventDTO} from "@/class/dto/EventDTO";
import {FC} from "react";
import {TableCell, TableRow} from "../ui/table";
import {useSelectedEvent} from "@/stores/selectedItemStore/selectedItemStore";
import {cn, formatTime} from "@/lib/utils";

interface EventProps {
  event: EventDTO;
}

const Event: FC<EventProps> = ({event}) => {
  const {selectedEvent, setSelectedEvent} = useSelectedEvent();
  const formattedDateTime = event.startTime.toLocaleDateString();

  const startTime =
    formatTime(event.startTime.getHours()) +
    ":" +
    formatTime(event.endTime.getMinutes());
  const endTime =
    formatTime(event.endTime.getHours()) +
    ":" +
    formatTime(event.endTime.getMinutes());

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
        {event.eventName}
      </TableCell>
      <TableCell>{event.game.title}</TableCell>
      <TableCell>{formattedDateTime}</TableCell>
      <TableCell>{`${startTime}-${endTime}`}</TableCell>
      <TableCell>{`${event.players}/${event.game.playerLimit}`}</TableCell>
    </TableRow>
  );
};

export default Event;
