import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaxiBookingServiceBase } from "./base/taxiBooking.service.base";

@Injectable()
export class TaxiBookingService extends TaxiBookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
