import { EventDTO } from "@/class/dto/EventDTO";
import { FC } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Event from "./Event";
import { ScrollArea } from "../ui/scroll-area";

interface EventListProps {
  events: EventDTO[] | undefined;
}

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <>
      <Table className="mt-5 sm:mt-5 text-xs sm:text-sm hidden sm:table">
        <TableHeader>
          <TableRow>
            <TableHead className="pl-2">Nazwa wydarzenia</TableHead>
            <TableHead>Nazwa Gry</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Godzina</TableHead>
            <TableHead>Liczba uczestników</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events &&
            events.map((event) => <Event key={event.id} event={event} />)}
        </TableBody>
      </Table>
      <div className="mt-5 table sm:hidden space-y-2">
        {events &&
          events.map((event) => (
            <Event isTable={false} key={event.id} event={event} />
          ))}
      </div>
    </>
  );
};

export default EventList;
