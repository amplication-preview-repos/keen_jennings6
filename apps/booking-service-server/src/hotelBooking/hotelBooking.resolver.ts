import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HotelBookingResolverBase } from "./base/hotelBooking.resolver.base";
import { HotelBooking } from "./base/HotelBooking";
import { HotelBookingService } from "./hotelBooking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HotelBooking)
export class HotelBookingResolver extends HotelBookingResolverBase {
  constructor(
    protected readonly service: HotelBookingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
