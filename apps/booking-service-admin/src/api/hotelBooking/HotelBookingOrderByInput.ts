import { SortOrder } from "../../util/SortOrder";

export type HotelBookingOrderByInput = {
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  roomType?: SortOrder;
  updatedAt?: SortOrder;
};
