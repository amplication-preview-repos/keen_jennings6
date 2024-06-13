import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FlightBookingWhereInput = {
  arrivalDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  departureDate?: DateTimeNullableFilter;
  flightNumber?: StringNullableFilter;
  id?: StringFilter;
};
