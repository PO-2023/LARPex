import { EventData } from "@/class/EventData";
import { FC } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
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
    <ScrollArea className="h-[700px] w-full mt-2">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] p-0">Nazwa wydarzenia</TableHead>
            <TableHead>Nazwa Gry</TableHead>
            <TableHead>Data</TableHead>
            <TableHead>Godzina</TableHead>
            <TableHead>Liczba uczestników</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <Event event={event} />
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default EventList;
