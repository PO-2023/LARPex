import { CEvents } from "@/class/CEvents";
import { useQuery } from "@tanstack/react-query";
import { DateRange } from "react-day-picker";

export const useGetEvents = (dateRange: DateRange | undefined) => {
  const cEvents = new CEvents();
  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: () => cEvents.getEvents(dateRange),
  });

  return { events, isLoading };
};
