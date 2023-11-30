import {Dialog, DialogContent, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import {useDialog} from "@/dispatcher/dialogDispatcher";
import {Button} from "../ui/button";

const SuccessDialog = () => {
  const {closeDialog, data} = useDialog();

  return (
      <Dialog open={true} onOpenChange={closeDialog}>
        <DialogContent className="min-h-[20rem] max-w-[19rem] flex flex-col">
          <DialogHeader>
            <DialogTitle>
            <span className="font-bold text-indigo-500 text-xl">
              {data.message}
            </span>
            </DialogTitle>
            <section className="flex flex-col gap-1 text-sm">
              <div
                  className="flex justify-center"
              style={{
                position: "absolute",
                bottom: "20px",
                marginLeft: "60px",
              }}
            >
              <Button
                className="w-32 flex gap-1 bg-indigo-400 hover:bg-indigo-300"
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
