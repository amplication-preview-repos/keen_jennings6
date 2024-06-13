import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HotelBookingServiceBase } from "./base/hotelBooking.service.base";

@Injectable()
export class HotelBookingService extends HotelBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
