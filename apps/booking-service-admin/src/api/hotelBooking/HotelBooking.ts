import { Customer } from "../customer/Customer";

export type HotelBooking = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  roomType: string | null;
  updatedAt: Date;
};
