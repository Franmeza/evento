//Utility function that combines clsx and twMerge so we can use it indenpendently if we need to add a class conditionally or merge a class into another avoiding conflicts.

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
