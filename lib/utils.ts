import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {format} from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper type to get all of the keys in a nested type.
export type ObjectKeys<
  // T = passed type, extend to be a an object with unknown value types.
  T extends Record<string, unknown>,
  // Key = keys of passed type.
  Key = keyof T,
> =
// Check if key is a string.
  Key extends string
    ? // Continue to check if key has nested objects.
    T[Key] extends Record<string, unknown>
      ? // If nested object is found, recursively run the ObjectKeys on it.
      `${Key}.${ObjectKeys<T[Key]>}`
      : // If nested object is not found, return the key.
      `${Key}`
    : // Return nothing.
    never;

export const formatCreatedDate = (createdAt: Date | undefined) => {
  if (!createdAt) return ''
  return format(new Date(), 'dd/MM/yyyy HH:mm')
}