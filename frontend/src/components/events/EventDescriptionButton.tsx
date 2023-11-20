import { Button } from "../ui/button";
import { BadgeInfo } from "lucide-react";

const EventDescriptionButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button className="sm:w-32 flex gap-1" variant="outline" onClick={onClick}>
      <BadgeInfo size={17} />
      <p className="hidden sm:block">Opis</p>
    </Button>
  );
};

export default EventDescriptionButton;
