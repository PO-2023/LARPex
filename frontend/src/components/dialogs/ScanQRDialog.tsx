import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useDialog } from "@/dispatcher/dialogDispatcher";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

const ScanQRDialog = () => {
  const { closeDialog } = useDialog();
  const [data, setData] = useState("No result");
  return (
    <Dialog open={true} onOpenChange={closeDialog}>
      <DialogContent className="min-h-[20rem] max-w-[19rem] flex flex-col">
        <DialogHeader></DialogHeader>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: "100%" }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ScanQRDialog;
