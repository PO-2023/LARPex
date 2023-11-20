import { Button } from "../ui/button";
import { DoorClosed } from "lucide-react";

const EnrollToEventButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      className="sm:w-32 flex gap-1 bg-indigo-400 hover:bg-indigo-300"
      onClick={onClick}
    >
      <DoorClosed size={20} />
      <p className="hidden sm:block">Zapisz się</p>
    </Button>
  );
};

export default EnrollToEventButton;
