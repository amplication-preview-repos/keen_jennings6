import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FlightBookingListRelationFilter } from "../flightBooking/FlightBookingListRelationFilter";
import { HotelBookingListRelationFilter } from "../hotelBooking/HotelBookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaxiBookingListRelationFilter } from "../taxiBooking/TaxiBookingListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  flightBookings?: FlightBookingListRelationFilter;
  hotelBookings?: HotelBookingListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  taxiBookings?: TaxiBookingListRelationFilter;
};
