import { EventData } from "@/class/EventData";
import { create } from "zustand";

type DialogType = "DescriptionDialog" | undefined;
type DialogData = { event: EventData } | undefined;

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
