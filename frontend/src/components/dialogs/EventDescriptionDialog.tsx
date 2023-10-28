import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/stores/dialogStore/dialogStore";

const EventDescriptionDialog = () => {
  const { type, closeDialog } = useDialog();

  return (
    <Dialog open={type === "DescriptionDialog"} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Wydarzenie</DialogTitle>
          <DialogDescription>Opis</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EventDescriptionDialog;
