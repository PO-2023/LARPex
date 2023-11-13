import { Button } from "../ui/button";
import { DoorClosed } from "lucide-react";
import { useEnrollToEvent } from "@/hooks/useEnrollToEvent";
import { useSelectedEvent } from "@/stores/selectedItemStore/selectedItemStore";

const EnrollToEventButton = () => {
  const { selectedEvent } = useSelectedEvent();
  const { enrollToEvent } = useEnrollToEvent({
    playerId: 123,
    eventId: selectedEvent?.id,
  });
  return (
    <Button
      className="w-32 flex gap-1 bg-indigo-400 hover:bg-indigo-300"
      onClick={() => enrollToEvent()}
    >
      <DoorClosed size={20} />
      Zapisz się
    </Button>
  );
};

export default EnrollToEventButton;
