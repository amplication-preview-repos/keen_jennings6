import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HotelBookingService } from "./hotelBooking.service";
import { HotelBookingControllerBase } from "./base/hotelBooking.controller.base";

@swagger.ApiTags("hotelBookings")
@common.Controller("hotelBookings")
export class HotelBookingController extends HotelBookingControllerBase {
  constructor(
    protected readonly service: HotelBookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
