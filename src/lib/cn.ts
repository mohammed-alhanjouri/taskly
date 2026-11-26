import { twMerge } from "tailwind-merge";

export function cn(...classes: string[]): string {
  return twMerge(...classes);
}
