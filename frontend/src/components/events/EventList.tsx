import { EventData } from "@/class/EventData";
import { FC } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Event from "./Event";

interface EventListProps {
  events: EventData[];
}

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <Table className="mt-5 sm:mt-5">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px] pl-2">Nazwa wydarzenia</TableHead>
          <TableHead>Nazwa Gry</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Godzina</TableHead>
          <TableHead>Liczba uczestników</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </TableBody>
    </Table>
  );
};

export default EventList;
