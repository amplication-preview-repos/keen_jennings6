import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlightBookingServiceBase } from "./base/flightBooking.service.base";

@Injectable()
export class FlightBookingService extends FlightBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
