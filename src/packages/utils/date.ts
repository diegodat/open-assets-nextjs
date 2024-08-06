import { format, parseISO } from "date-fns";

export const formatDate = (date: string) => {
  return format(parseISO(date), "dd/MM/yyyy");
};

export const formatDateLocal = (date: Date) => {
  return format(date, "dd/MM/yyyy");
};

export const formatDateLocalTimeStamp = (date: Date) => {
  return format(date, "dd/MM/yyyy hh:mm");
};

export const formatHourMinute = (date: string) => {
  return format(parseISO(date), "hh:mm");
};

export const formatDateTime = (date: string) => {
  return format(parseISO(date), "hh:mm:ss dd/MM/yyyy");
};
