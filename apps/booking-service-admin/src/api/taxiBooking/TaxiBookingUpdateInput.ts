import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TaxiBookingUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  dropoffLocation?: string | null;
  pickupLocation?: string | null;
  pickupTime?: Date | null;
};
