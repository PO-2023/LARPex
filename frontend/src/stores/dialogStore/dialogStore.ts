import { EventDTO } from "@/class/EventData";
import { create } from "zustand";

type DialogType =
  | "DescriptionDialog"
  | "MakePaymentDialog"
  | "SuccessDialog" | "ErrorDialog"
  | undefined;
type DialogData =
  | { event?: EventDTO; paymentData?: { paymentId: number; price: number } }
  | undefined;

type Store = {
  type: DialogType;
  data?: DialogData;
  dialogDispatcher: (type: DialogType, data?: DialogData) => void;
  closeDialog: () => void;
};

export const useDialog = create<Store>()((set) => ({
  type: undefined,
  data: undefined,
  dialogDispatcher: (type, data) => set(() => ({ type, data })),
  closeDialog: () => set(() => ({ type: undefined })),
}));
