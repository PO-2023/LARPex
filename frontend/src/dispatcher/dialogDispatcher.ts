import {EventDTO} from "@/class/dto/EventDTO";
import {create} from "zustand";

export enum DialogType {
  DESCRIPTION_DIALOG,
  MAKE_PAYMENT_DIALOG,
  SUCCESS_DIALOG,
  ERROR_DIALOG,
}

export type DialogData =
    | { event?: EventDTO; paymentData?: { paymentId: number; price: number } }
    | { message?: string }
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
