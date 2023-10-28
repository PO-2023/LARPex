import { useDialog } from "@/stores/dialogStore/dialogStore";
import { Button } from "../ui/button";
import { BadgeInfo } from "lucide-react";

const EventDescriptionButton = () => {
  const { dialogDispatcher } = useDialog();

  return (
    <Button
      className="w-32 flex gap-1"
      variant="outline"
      onClick={() => dialogDispatcher("DescriptionDialog")}
    >
      <BadgeInfo size={17} />
      Opis
    </Button>
  );
};

export default EventDescriptionButton;
