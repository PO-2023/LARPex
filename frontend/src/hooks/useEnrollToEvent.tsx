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
    onSuccess: () => {
      dialogDispatcher("MakePaymentDialog", {
        paymentData: { paymentId: 123, price: 23 },
      });
    },
  });

  return { enrollToEvent };
};
