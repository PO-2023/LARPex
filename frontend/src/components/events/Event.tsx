import { EventData } from "@/class/EventData";
import { FC } from "react";
import { TableCell, TableRow } from "../ui/table";

interface EventProps {
  event: EventData;
}

const format = (input: number, padLength: number): string => {
  return input.toString().padStart(padLength, "0");
};

const formatTime = (time: number) => {
  return format(time, 2);
};

const Event: FC<EventProps> = ({ event }) => {
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
    <TableRow key={event.id}>
      <TableCell>{event.eventName}</TableCell>
      <TableCell>{event.gameName}</TableCell>
      <TableCell>{formattedDateTime}</TableCell>
      <TableCell>{`${startTime}-${endTime}`}</TableCell>
      <TableCell>{`${event.players}/${event.maxPlayers}`}</TableCell>
    </TableRow>
  );
};

export default Event;
