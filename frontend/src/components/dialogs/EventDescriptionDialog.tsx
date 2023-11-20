import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import {useDialog} from "@/dispatcher/dialogDispatcher";
import {useSelectedEvent} from "@/stores/selectedItemStore/selectedItemStore";
import {CalendarCheck, CalendarX, DollarSign, Swords, Users,} from "lucide-react";

const EventDescriptionDialog = () => {
  const {closeDialog} = useDialog();
  const {selectedEvent} = useSelectedEvent();

  if (!selectedEvent) return;

  const startTime = new Date(selectedEvent.startTime);
  const endTime = new Date(selectedEvent.endTime);

  return (
    <Dialog open={true} onOpenChange={closeDialog}>
      <DialogContent className="min-h-[20rem] max-w-[19rem]">
        <DialogHeader>
          <DialogTitle>
            <span className="font-bold text-indigo-500 text-xl">
              {selectedEvent?.name}
            </span>
          </DialogTitle>
          <DialogDescription className="mt-4">
            Dane wydarzenia
          </DialogDescription>
          <section className="flex flex-col gap-1 text-sm">
            <div className="flex gap-3 mt-3 items-center">
              <Swords /> {selectedEvent?.game?.title}
            </div>
            <div className="flex gap-3 mt-3 items-center">
              <CalendarCheck /> {startTime?.toLocaleDateString()}
            </div>
            <div className="flex gap-3 mt-3 items-center">
              <CalendarX /> {endTime?.toLocaleDateString()}
            </div>
            <div className="flex gap-3 mt-3 items-center">
              <Users /> {selectedEvent.players}/{selectedEvent.game.playerLimit}
            </div>
            <div className="flex gap-3 mt-3 items-center">
              <DollarSign /> {selectedEvent.price} zł
            </div>
          </section>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EventDescriptionDialog;
