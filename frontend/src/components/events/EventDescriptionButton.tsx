import {Button} from "../ui/button";
import {BadgeInfo} from "lucide-react";

const EventDescriptionButton = ({onClick}) => {
  return (
      <Button
          className="w-32 flex gap-1"
          variant="outline"
          onClick={onClick}
      >
        <BadgeInfo size={17}/>
        Opis
      </Button>
  );
};

export default EventDescriptionButton;
