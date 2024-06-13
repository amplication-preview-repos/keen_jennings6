import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type HotelBookingCreateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  roomType?: string | null;
};
