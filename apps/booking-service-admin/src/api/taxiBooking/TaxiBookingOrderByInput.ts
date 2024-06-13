import { SortOrder } from "../../util/SortOrder";

export type TaxiBookingOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dropoffLocation?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  pickupTime?: SortOrder;
  updatedAt?: SortOrder;
};
