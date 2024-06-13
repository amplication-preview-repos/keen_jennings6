import { HotelBooking as THotelBooking } from "../api/hotelBooking/HotelBooking";

export const HOTELBOOKING_TITLE_FIELD = "roomType";

export const HotelBookingTitle = (record: THotelBooking): string => {
  return record.roomType?.toString() || String(record.id);
};
