import { create } from "zustand";

type DialogType = "DescriptionDialog" | undefined;

type Store = {
  type: DialogType;
  dialogDispatcher: (type: DialogType) => void;
  closeDialog: () => void;
};

export const useDialog = create<Store>()((set) => ({
  type: undefined,
  dialogDispatcher: (type) => set(() => ({ type: type })),
  closeDialog: () => set(() => ({ type: undefined })),
}));
