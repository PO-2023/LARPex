import { EventDTO } from "@/class/EventData";
import { create } from "zustand";

type Store = {
  selectedEvent: EventDTO | null;
  setSelectedEvent: (event: EventDTO) => void;
};

export const useSelectedEvent = create<Store>()((set) => ({
  selectedEvent: null,
  setSelectedEvent: (event) => set(() => ({ selectedEvent: event })),
}));
