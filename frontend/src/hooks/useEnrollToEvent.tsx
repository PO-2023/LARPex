import { CEvents } from "@/class/CEvents";
import { useDialog } from "@/stores/dialogStore/dialogStore";
import { useMutation } from "@tanstack/react-query";
export const useEnrollToEvent = ({
  playerId,
  eventId,
}: {
  playerId: number;
  eventId: number;
}) => {
  const cEvents = new CEvents();
  const { dialogDispatcher } = useDialog();

  const { mutate: enrollToEvent } = useMutation({
    mutationFn: () => cEvents.enrollToEvents(playerId, eventId),
    onSuccess: (result) => {
      dialogDispatcher("MakePaymentDialog", {
        paymentData: result,
      });
    },
  });

  return { enrollToEvent };
};
