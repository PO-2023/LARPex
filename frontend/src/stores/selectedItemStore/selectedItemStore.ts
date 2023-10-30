import { EventData } from "@/class/EventData";
import { create } from "zustand";

type Store = {
  selectedEvent: EventData | null;
  setSelectedEvent: (event: EventData) => void;
};

export const useSelectedEvent = create<Store>()((set) => ({
  selectedEvent: null,
  setSelectedEvent: (event) => set(() => ({ selectedEvent: event })),
}));
