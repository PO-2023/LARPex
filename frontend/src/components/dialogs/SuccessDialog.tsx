import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { useDialog } from "@/stores/dialogStore/dialogStore";
  import { useSelectedEvent } from "@/stores/selectedItemStore/selectedItemStore";
  import { Button } from "../ui/button";
  
  const SuccessDialog = () => {
    const { type, closeDialog } = useDialog();
    const { selectedEvent } = useSelectedEvent();
  
    if (!selectedEvent) return;
  
    return (
      <Dialog open={type === "SuccessDialog"} onOpenChange={closeDialog}>
        <DialogContent className="min-h-[20rem] max-w-[19rem] flex flex-col">
          <DialogHeader>
            <DialogTitle>
              <span className="font-bold text-indigo-500 text-xl">Płatność zakończona pomyślnie</span>
            </DialogTitle>
            <section className="flex flex-col gap-1 text-sm">
              <div className="flex justify-center" style={{ position: "absolute", bottom: '20px', marginLeft: "60px" }}>
                <Button className="w-32 flex gap-1 bg-indigo-400 hover:bg-indigo-300"
                onClick={() => closeDialog()}
                >
                  OK
                </Button>
              </div>
            </section>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default SuccessDialog;
  