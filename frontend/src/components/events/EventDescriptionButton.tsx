import { Button } from "../ui/button";
import { BadgeInfo } from "lucide-react";

const EventDescriptionButton = () => {
  return (
    <Button className="w-32 flex gap-2" variant="outline">
      <BadgeInfo size={17} />
      Opis
    </Button>
  );
};

export default EventDescriptionButton;
