import {EventDTO} from "@/class/dto/EventDTO";
import {FC} from "react";
import {Table, TableBody, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import Event from "./Event";

interface EventListProps {
    events: EventDTO[] | undefined;
}

const EventList: FC<EventListProps> = ({events}) => {
    return (
        <Table className="mt-5 sm:mt-5 text-xs sm:text-sm">
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
  );
};

export default EventList;
