import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TaxiBookingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dropoffLocation?: StringNullableFilter;
  id?: StringFilter;
  pickupLocation?: StringNullableFilter;
  pickupTime?: DateTimeNullableFilter;
};
