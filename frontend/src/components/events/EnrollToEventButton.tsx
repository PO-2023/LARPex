import { useDialog } from "@/stores/dialogStore/dialogStore";
import { Button } from "../ui/button";
import { DoorClosed } from "lucide-react";

const EnrollToEventButton = () => {
  const { dialogDispatcher } = useDialog();
  
  return (
    <Button className="w-32 flex gap-1 bg-indigo-400 hover:bg-indigo-300" 
      onClick={() => dialogDispatcher("MakePaymentDialog")}
    >
      <DoorClosed size={20} />
      Zapisz się
    </Button>
  );
};

export default EnrollToEventButton;
