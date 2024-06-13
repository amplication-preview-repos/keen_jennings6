import { TaxiBooking as TTaxiBooking } from "../api/taxiBooking/TaxiBooking";

export const TAXIBOOKING_TITLE_FIELD = "dropoffLocation";

export const TaxiBookingTitle = (record: TTaxiBooking): string => {
  return record.dropoffLocation?.toString() || String(record.id);
};
