import { EventDTO } from "@/class/dto/EventDTO";
import { FC } from "react";
import { TableCell, TableRow } from "../ui/table";
import { useSelectedEvent } from "@/stores/selectedItemStore/selectedItemStore";
import { cn, formatTime } from "@/lib/utils";
import { Clock1, Users } from "lucide-react";

interface EventProps {
  event: EventDTO;
  isTable?: boolean;
}

const Event: FC<EventProps> = ({ event, isTable = true }) => {
  const { selectedEvent, setSelectedEvent } = useSelectedEvent();

  const startDate = new Date(event.startTime);
  const endDate = new Date(event.endTime);

  const formattedDateTime = startDate.toLocaleDateString();

  const startTime =
    formatTime(startDate.getHours()) + ":" + formatTime(startDate.getMinutes());
  const endTime =
    formatTime(endDate.getHours()) + ":" + formatTime(endDate.getMinutes());

  if (isTable) {
    return (
      <TableRow
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
        <TableCell>{`${event.players ? event.players : 0}/${
          event.game.playerLimit ? event.game.playerLimit : 0
        }`}</TableCell>
      </TableRow>
    );
  } else {
    return (
      <div
        onClick={() => setSelectedEvent(event)}
        key={event.id}
        className={cn(
          "cursor-pointer text-xs sm:text-sm p-1 py-2 rounded-sm flex items-center justify-between",
          selectedEvent?.id === event.id && "bg-gray-100 hover:bg-gray-100"
        )}
      >
        <div>
          <div
            className={cn(
              selectedEvent?.id === event.id && "font-bold text-indigo-400"
            )}
          >
            {event.name}
          </div>
          <div>{formattedDateTime}</div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-0.5">
            <Users className="w-3 h-3" />
            <div>{`${event.players ? event.players : 0}/${
              event.game.playerLimit ? event.game.playerLimit : 0
            }`}</div>
          </div>
          <div className="flex items-center justify-center gap-0.5">
            <Clock1 className="w-3 h-3" />
            <div>{`${startTime}-${endTime}`}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Event;
