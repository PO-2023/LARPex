import {Button} from "../ui/button";
import {DoorClosed} from "lucide-react";

const EnrollToEventButton = ({onClick}) => {
  return (
      <Button
          className="w-32 flex gap-1 bg-indigo-400 hover:bg-indigo-300"
          onClick={onClick}
      >
        <DoorClosed size={20}/>
        Zapisz się
      </Button>
  );
};

export default EnrollToEventButton;
