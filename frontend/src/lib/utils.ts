import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const format = (input: number, padLength: number): string => {
  return input.toString().padStart(padLength, "0");
};

export const formatTime = (time: number) => {
  return format(time, 2);
};
