import { FlightBooking as TFlightBooking } from "../api/flightBooking/FlightBooking";

export const FLIGHTBOOKING_TITLE_FIELD = "flightNumber";

export const FlightBookingTitle = (record: TFlightBooking): string => {
  return record.flightNumber?.toString() || String(record.id);
};
