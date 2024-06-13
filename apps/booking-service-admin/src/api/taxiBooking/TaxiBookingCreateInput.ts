import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TaxiBookingCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dropoffLocation?: string | null;
  pickupLocation?: string | null;
  pickupTime?: Date | null;
};
