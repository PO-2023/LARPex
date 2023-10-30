import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/stores/dialogStore/dialogStore";
import { useSelectedEvent } from "@/stores/selectedItemStore/selectedItemStore";

const EventDescriptionDialog = () => {
  const { type, closeDialog } = useDialog();
  const { selectedEvent } = useSelectedEvent();

  return (
    <Dialog open={type === "DescriptionDialog"} onOpenChange={closeDialog}>
      <DialogContent className="min-h-[30rem]">
        <DialogHeader>
          <DialogTitle>
            Wydarzenie{" "}
            <span className="font-bold text-indigo-500">
              {selectedEvent?.gameName}
            </span>
          </DialogTitle>
          <DialogDescription className="mt-4">
            {selectedEvent?.eventName}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EventDescriptionDialog;
